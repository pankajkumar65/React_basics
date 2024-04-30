import React from 'react'
import Person from './Person'

function NameList() {
    const Persons = [  
        {
            id: 1,
            name: 'Bruce',
            age:    18,
            skill:  'React'
        },

        {
            id: 2,
            name: 'Lione',
            age : 19,
            skill: 'Java'

        },

        {
            id: 3,
            name: 'Diane',
            age : 20,
            skill: 'C++'
        }

]
    const PersonList = Persons.map(person => <Person key={person.id} person={person}/> )
    return <div>{PersonList}</div>

}

export default NameList
