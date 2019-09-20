import React from "react";

function NameList (){
    const persons = [
        {
            id: 1,
            name: "shraddha",
            job: "software develpoer"
        },
        {
            id: 2,
            name: "shardul",
            job: "docter"
        }
    ];
    const personList = persons.map(( person, index ) => <h3 key={index} >My name is {person.name} and I am {person.job}</h3> );
    return <div>{personList}</div>
}

export default NameList;