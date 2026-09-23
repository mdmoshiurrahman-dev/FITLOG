const workoutDataPromise = async()=>{
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return response.json();
}

const TheLibrary = async() => {
    const workoutData = await workoutDataPromise();
    console.log(workoutData);
    return <section>
        <div>
           <h2>THE LIBRARY</h2> 
           <p>Twelve lifts covering every major muscle group.</p>
           <div>

           </div>
        </div>
    </section>
}

export default TheLibrary;
