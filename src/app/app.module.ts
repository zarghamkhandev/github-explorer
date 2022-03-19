import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TUI_SANITIZER,
  TuiSvgModule,
} from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { onError } from '@apollo/client/link/error';
import { HttpLink } from 'apollo-angular/http';
import { ApolloLink, DefaultOptions, InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorProvider } from './auth/auth.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './state/effects';
import { HeaderModule } from './components/header/header.module';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
  },
  query: {
    fetchPolicy: 'no-cache',
  },
};

// only to log errors to the console
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.error(`[Network error]: ${networkError}`);
});

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiNotificationsModule,
    ApolloModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(effects),
    HeaderModule,
  ],
  providers: [
    AuthInterceptorProvider,
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache({}),
          link: errorLink.concat(
            httpLink.create({
              uri: 'https://api.github.com/graphql',
            })
          ),
          defaultOptions,
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
