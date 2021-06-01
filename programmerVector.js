const programmer = {
    name: 'Edmundo',
    age: 23,
    tec: [
        { nome: 'C++', expertise: 'Desktop' },
        { nome: 'Python', expertise: 'Data Science' },
        { nome: 'JavaScript', expertise: 'Web/Mobile' }
    ]
}

console.log(`The user ${programmer.name} has ${programmer.age} and use the technology ${programmer.tec[2].nome} with expertise in ${programmer.tec[2].expertise}`)