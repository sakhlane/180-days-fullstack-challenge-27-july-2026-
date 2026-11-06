//  component get the users data from an api 

import { useState, useEffect } from 'react';

function GetUsers() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const result = await response.json();

                setUser(result);
            } catch (error) {
                console.log("Failed to fetch users:", error.message);
            } finally {
                setLoading(false);
            }
        }

        getUsers();
    }, []);

    return (
        <>
            <h1>USER DATA</h1>

            {loading && <p>Users Data Loading...</p>}

            {!loading && user.map((item) => (
                <div key={item.id}>
                    <h2>Name: {item.name}</h2>
                    <h2>Email: {item.email}</h2>
                    <h2>City: {item.address.city}</h2>
                    <h2>ID: {item.id}</h2>
                </div>
            ))}
        </>
    );
}

export default GetUsers;


