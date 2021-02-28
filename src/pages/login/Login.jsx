import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = () => {

    // สร้างตัวแปรแบบ State ไว้รับค่าจากฟอร์ม
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    // เช็คว่าถ้าล็อกอินแล้วให้ส่งไปหน้า Dashboard
    if(localStorage.getItem('fullname') != null){
        // ส่งไปหน้า Backend / Dashboard
        window.location = '/backend/dashboard'
    }

    // ฟังก์ชันการ Submit Form
    const handleSubmit = (e) => {
        e.preventDefault()

        // ลองดูข้อมูลที่ได้จาก state
        // console.log(username, password)

        if(username === "admin" && password === "1234"){
            // alert("Login success")
            let timerInterval
            Swal.fire({
                html: 'กำลังเข้าสู่ระบบ <b></b>',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                    }, 2000)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    // เก็บชื่อผู้ใช้ลง LocalStorage
                    localStorage.setItem('fullname','สามิตร โกยม')

                    // ส่งไปหน้า Backend / Dashboard
                    window.location = '/backend/dashboard'
                }
            })

        }else{
            // alert("Login fail")
            Swal.fire({
                title: 'มีข้อผิดพลาด!',
                text: 'ข้อมูลเข้าระบบไม่ถูกต้อง',
                icon: 'error',
                confirmButtonText: 'ลองใหม่อีกครั้ง',
                allowOutsideClick: false,
                allowEscapeKey: true
            })
        }
    }

    document.title = 'Login | Smart Stock'

    return (
            <form className="card p-4 col-md-4 my-form" onSubmit={handleSubmit}>

                <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>
                
                <div className="mb-3 row">
                    <label htmlFor="username" className="col-md-4 col-form-label">ชื่อผู้ใช้</label>
                    <div className="col-md-8">
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        required
                    />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="password" className="col-md-4 col-form-label">รหัสผ่าน</label>
                    <div className="col-md-8">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        required
                    />
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
                        value="เข้าสู่ระบบ"
                    />
                    </div>
                </div>

                <div className="mb-2 row btn-action">
                    <label htmlFor="" className="col-md-4 col-form-label"></label>
                    <div className="col-md-8"><Link to="/forgotpassword">ลืมรหัสผ่าน ?</Link></div>
                </div>

                <div className="mb-2 row btn-action">
                    <label htmlFor="" className="col-md-4 col-form-label"></label>
                    <div className="col-md-8"><Link to="/register">ลงทะเบียน</Link></div>
                </div>

            </form>
    )
}

export default Login