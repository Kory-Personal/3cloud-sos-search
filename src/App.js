import React from "react";

// import { InteractionType } from "@azure/msal-browser";
// import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";

// function WelcomeUser() {
//     const { accounts } = useMsal();
//     const username = accounts[0].username;

//     return <p>Welcome, {username}</p>
// }

// Remember that MsalProvider must be rendered somewhere higher up in the component tree
function App() {
    return (
      <>
         {/* <MsalAuthenticationTemplate interactionType={InteractionType.Popup}> */}
            <p>This will only render if a user is signed-in.</p>
            {/* <WelcomeUser /> */}
            <div className="App">
              <form>
                <input type="text" placeholder="Enter Key Word(s)"></input>
                <button>Search</button>
              </form>
            </div>
         {/* </MsalAuthenticationTemplate> */}
      </>
      )
};
export default App;
