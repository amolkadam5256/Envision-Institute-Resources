const getData = async () => {

    const options = {
        method: 'GET',
        url: 'https://the-cocktail-db3.p.rapidapi.com/',
        headers: {
            'x-rapidapi-key': '1b843769aemsh1aec3711bf731a1p1fa454jsn464b9efda6de',
            'x-rapidapi-host': 'the-cocktail-db3.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);

        console.log(response.data[0].difficulty);
        console.log(response.data[0].image);
        console.log(response.data[0].id);
        console.log(response.data[0].title);


        const tableBody = document.getElementById("table-body");
        tableBody.innerHTML = "";


        response.data.map((manu) => {
            const row = document.createElement("tr");
            row.innerHTML =
                `
                <td class="border border-gray-300 px-4 py-2">${manu.id}</tr>
                <td class="border border-gray-300 px-4 py-2">
                <img class="w-[200px]" src="${manu.image}"/>
                </tr>
                <td class="border border-gray-300 px-4 py-2">${manu.difficulty}</tr>
                <td class="border border-gray-300 px-4 py-2">${manu.title}</tr>
                `
            tableBody.appendChild(row);
        })
    } catch (error) {
        console.error("Error data is not Featch");
    }
}