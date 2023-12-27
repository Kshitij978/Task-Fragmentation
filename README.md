# Task-Fragmentation

My Pick - Both

_**Reason for picking both (one of the reasons is I had the time to do the both):**_

**Other Reasons** ⬇️

## Custom Hooks:

- As first assignment is on reusability of functionality in the **entire app**.
- Functionality can be made reusable best with the use of custom hooks.
- Focuses on isolating reusable logic for fetching transactions, executing burns, and managing chains.
- Creates custom hooks using useState and useEffect to manage state and side effects.
- Improves code organization and promotes reusability across the application.

What more can be done?

- The use of central state management like redux and mobx (should be used only when the app size has increased and it is actually required to separate the states from UI).

- useReducer() hook can also be used to get rid of multiple useState hooks which will make the code more readable.

- useContext() hook in place of redux or mobx.

## Fragmenting UI into separate components:

- Divides the UI into smaller, self-contained components based on their purpose (e.g., header, supply stats, burn form, transaction table).
- Each component renders a specific UI element and accepts necessary data/props from the parent component.
- Enhances UI clarity and facilitates independent component testing/modification.

Both approaches improve the overall code quality of the BurnPage:

**Readability:** Code becomes more readable and easier to understand by separating concerns and breaking down large blocks.

**Maintainability:** Refactored code is easier to modify, debug, and test due to modularity

**Reusability:** Extracted functionalities and components can be reused in other parts of the application.

## Folders:

**before:** Contains the original, unrefactored code of the BurnPage component.

**after:** Includes the refactored code with chosen fragmentation approach applied (either custom hooks or selective components).
