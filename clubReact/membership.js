import React from "react";

function Membership()
{
    const membership =
    (
        <main>
            <form>
                <h1>Application</h1>

                <label>Name</label>
                <input type="text"></input>

                <label>Email</label>
                <input type="email"></input>

                <label>Password</label>
                <input type="password"></input>

                <button>Apply</button>
            </form>
        </main>
    );

    return membership;
}

export default Membership;