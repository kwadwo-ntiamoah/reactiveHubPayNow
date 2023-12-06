# REDUX CONCEPTS
    1. Store: Global state for application. Accessible anywhere
    2. Actions: Specifies what should be done with state -> Has 2 properties (type & payload)
    3. Reducers: Takes an action and performs update to redux store based on the action

## STEPS
    1. Create your main store => @/Presentation/store/index.ts
    2. Wrap your app with store using Provider from "react-redux" => main.tsx
    3. Create Slice/State

REMEBER: state.value = "whatever computation"
        action.payload = "holds whatever data is passed from UI"