
const userApiCall = async () => {
    const apiUrl = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(apiUrl);
    const data = response.json()
    return data;
}

export default userApiCall