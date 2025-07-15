import './App.css'
import { useForm } from "react-hook-form"

function App() {

  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors, isSubmitting },
  } = useForm()

  // const delay = (d) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, d * 1000);
  //   })
  // }

  const onSubmit = async (data) => {
    // await delay(2) //simulating network delay

    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    let res = await r.text()

    console.log(data, res)

    // if(data.username == 'rohan'){
    //   setError("blocked", {message: "THIS user is BLOCKED!"})
    // }
    // else if (data.username !== "ROHAN") {
    //   setError("myForm",{message: "Incorrect username!"})
    // }
  }

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: { value: true, message: "Cannot leave this block empty!" }, minLength: { value: 3, message: "Min length = 3" }, maxLength: { value: 8, message: "Max length = 8" } })} type="text" name="username" />
          {errors.username && <div style={{ color: "red" }}>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password")} type="password" name="password" />
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />

          {/* {errors.myForm && <div style={{ color: "red" }}>{errors.myForm.message}</div>} */}
          {/* {errors.blocked && <div style={{ color: "red" }}>{errors.blocked.message}</div>} */}

        </form>
      </div>
    </>
  )
}

export default App
