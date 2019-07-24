Feature: Show/hide an event's details

Scenario: By default, an event is collapsed
  Given user hasn’t opened any event
  When user opens the app
  Then the user should see the collapsed list of events

Scenario: User can expand an event to see its details
  Given user hasn’t opened any event
  When the user clicks on an event
  Then the details of the selected event will show

Scenario: User can collapse an event to hide its details
  Given an event is opened, the details are shown
  When the user clicks on an event
  Then the details of the selected event will show
