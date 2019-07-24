Feature: Specify number of events

Scenario: User hasn't specified a number, the default number is 32
  Given the user has not changed the default number of events in the list
  When the user opens the app
  Then 32 events will show in the list of events

Scenario: User can change the number of events they want to see
  Given user has changed the default number of events showing in the list
  When the user opens the app
  Then the list of events will show the number of events that the user has set before
