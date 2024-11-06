import { Helmet } from "react-helmet"

const Contuct = () => {
  return (
    
        <div className="hero bg my-10 rounded-xl py-4  md:py-10 md:px-8 shadow-lg">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contuct | Gadjet Heaven </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left ">
      <h1 className="text-5xl font-bold text-white">Contuct Us!</h1>
      <p className="py-6 text-slate-100">
      This smart home device brings convenience to your fingertips, letting you control lights, music, and more with just your voice
      </p>
    </div>
    <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl ">
      <form className="md:p-6">
        <h2 className="font-semibold">Submit Details</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
      </div>
 
    
  )
}

export default Contuct
