import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <section className="section-center">
      <form>
        <h4>Đặt lại mật khẩu</h4>
        <div>
          <input
            type="email"
            className="form-input"
            placeholder="Nhập Địa chỉ Email của bạn"
          />
        </div>
        <br />
        <div className="text-center d-grid gap-2 ">
          <Link to="/otp">
            <button type="button" className="btn btn-primary ">
              Đặt lại mật khẩu
            </button>
          </Link>
        </div>
        <br />
      </form>
    </section>
  );
}

export default ForgotPassword;
