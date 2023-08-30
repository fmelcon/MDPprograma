/*const leerJson = () => {
    fetch("./ejemplo.json")
        .then((res) =>{
            res.json();
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((err) =>{
            console.log(err);
        })
    }
leerJson();
*/


const leerJson = async () => {
    try {
        const response = await fetch("./ejemplo.json");
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

leerJson();