const URLAPI = 'https://dummyjson.com/users';
const cnt = document.querySelector('#cnt');


async function getUsers() {
    try {
        const response = await fetch(URLAPI);


        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }


        const data = await response.json();


        const { users } = data;


        console.dir(users[0], { depth: null });

        const userList = users
            .filter(usuario => usuario.gender == 'female')
            .map(usuario => ({

                id: usuario.id,
                name: `${usuario.firstName} ${usuario.maidenName} ${usuario.lastName}`,
                city: usuario.address.city || 'Unknown',
                age: usuario.age,
                phone: usuario.phone,
                email: usuario.email,
                image: usuario.image


            }))

    
            
    cnt.innerHTML = userList.map(u => `
            <div class="cards border border-black rounded-xl p-10 m-5 justify-items-center aling-center w-[300px] shadow-md bg-white items-center">
                <img src ="${u.image}" alt ="${u.nome}>
                <p class="font-bold text-lg">nome: ${u.name}</p>
                <p class="text-gray-600">cidade: ${u.city}</p>
                <p class ="text-gray-600">idade: ${u.age}</p>
                <p class ="text-gray-600">telefone: ${u.phone}</p>
                <p class ="text-gray-600">email: ${u.email}</p>
            </div>
        `).join('');

    } catch (error) {
        console.error('Error fetching users:', error.message);
    }
}

getUsers();

