import { Link } from "react-router-dom"

const Forgotpassword = () => {

  document.title = "Forgot Password | Smart Stock"

  return (
      <form className="card p-4 col-md-4 my-form" onSubmit={() => {}}>
        <h3 className="text-center mb-4">ลืมรหัสผ่าน</h3>

        <div className="mb-3 row">
          <label htmlFor="email" className="col-md-4 col-form-label">
            อีเมล์ที่ใช้ลงทะเบียน
          </label>
          <div className="col-md-8">
            <input type="text" className="form-control" id="email" name="email" required />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="submit" className="col-md-4 col-form-label"></label>
          <div className="col-md-8 btn-action">
            <input
              type="submit"
              className="btn btn-primary"
              name="submit"
              id="submit"
              value="ส่งข้อมูล"
            />
          </div>
        </div>

        <div className="mb-2 row btn-action">
          <label htmlFor="" className="col-md-4 col-form-label"></label>
          <div className="col-md-8">
            <Link to="/login">เข้าสู่ระบบ</Link>
          </div>
        </div>
      </form>
  )
}

export default Forgotpassword