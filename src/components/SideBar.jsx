const SideBar = () => {
  return (
    <div className="sidebar">
      <h2>Register your interest in adoption today!</h2>
      <form>
        <label>
          Full Name:<input type="text" name="fullname"></input>
        </label>
        <label>
          Contact Number:<input type="text" name="contactnumber"></input>
        </label>
        <label>Animal ID:</label>
        <select id="id-select">
          <option value="">--Please choose an animal ID--</option>
          <option value="209384">209384</option>
          <option value="987657">987657</option>
          <option value="210938">210938</option>
          <option value="203948">203948</option>
          <option value="928343">928343</option>
          <option value="129832">129832</option>
          <option value="398423">398423</option>
          <option value="837445">837445</option>
          <option value="738454">738454</option>
          <option value="209123">209123</option>
          <option value="109282">109282</option>
          <option value="289343">289343</option>
          <option value="394832">394832</option>
          <option value="129872">129872</option>
          <option value="599620">599620</option>
          <option value="298301">298301</option>
          <option value="300981">300981</option>
          <option value="686786">686786</option>
          <option value="209809">209809</option>
          <option value="701923">701923</option>
          <option value="192832">192832</option>
          <option value="992201">992201</option>
          <option value="237098">237098</option>
          <option value="708244">708244</option>
          <option value="387378">387378</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SideBar
