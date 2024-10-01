export const GET = (request) => {
    //Handles GET request for api/users

    //Retrieve users from any database or source
    const users = [
        {id: 1, name: 'Jane'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Bob'}
    ]

    //Send users as a response
    return new Response(JSON.stringify(users))
}