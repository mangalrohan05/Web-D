let m = document.getElementsByClassName("message");

mList = Array.from(m);
console.log(mList)

function display(time, e){

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            mList[e].style.opacity = 1;
            resolve();
        }, time*1000);
    });
}

async function main(){
    for(let i = 0; i<mList.length; i++){
        let time = 1 + Math.floor(Math.random()*2)
        console.log(time)
    
        console.log(mList[i])
        await display(time, i)
    }
}
  

main()

