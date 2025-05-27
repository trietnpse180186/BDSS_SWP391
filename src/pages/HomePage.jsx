import React from "react";
import { FaBell, FaCog } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router";
export default function HomePage() {
  return (
    <>
      <div className="home-header">
        <div className="hd-container">
          <div className="hd-component">
            <link
              href="https://fonts.googleapis.com/css2?family=Italianno&display=swap"
              rel="stylesheet"
            />
            <div className="slogan">
              <em>Một giọt máu cho đi</em>
              <em> Một cuộc đời ở lại</em>
            </div>
            <div className="logo">
              <img src="src/images/logo.jpeg" />
            </div>
            <div className="authorization">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <Link
                    className="link-no"
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "red",
                      fontWeight: "bold",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    Đăng nhập
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nb-container">
          <div className="nb-component">
            <div className="item">
              <Link to={"/"}>Trang chủ</Link>
            </div>
            <div className="item">
              <a href="#">Đăng ký hiến máu</a>
            </div>
            <div className="item">
              <a href="#">Hỏi Đáp</a>
            </div>
            <div className="item">
              <a href="#">Liên hệ</a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-body">
        <div className="bd-banner">
          <img src="src/images/banner.jpeg" alt="Banner" />
        </div>
        <div className="bd-content">
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          />
          <div className="bd-content-above">
            <div className="content-above-left">
              <img
                src="src/images/image1.jpg"
                alt="Benefits"
              />
            </div>
            <div className="content-above-right">
              <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
                rel="stylesheet"
              />
              <h3>Lợi ích của việc hiến máu</h3>
              <br></br>
              <ul style={{ listStyleType: "none" }}>
                <li>- Cứu sống người bệnh trong ca cấp cứu, phẫu thuật.</li>
                <li>- Kiểm tra sức khỏe miễn phí và định kỳ.</li>
                <li>- Tái tạo máu mới, tuần hoàn tốt hơn.</li>
                <li>- Mang lại niềm vui và ý nghĩa nhân đạo.</li>
              </ul>
              <p> “Một giọt máu cho đi – Một cuộc đời ở lại” </p>
            </div>
          </div>
          <div className="bd-content-middle">
            <h3
              style={{
                color: "white",
                fontSize: "2em",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Điều kiện đạt chuẩn để được hiến máu
            </h3>
            <div className="content-1">
              <div className="content-detail">
                <p>Không nghiện ma túy, rượu bia và các chất kích thích</p>
              </div>
              <div className="content-detail">
                <p>Không mắc các bệnh truyền nhiễm qua đường máu</p>
              </div>
              <div className="content-detail">
                <p>
                  Không mắc các bệnh lý mãn tính hoặc cấp tính về tim mạch,
                  huyết áp, gan, hô hấp,...
                </p>
              </div>
              <div className="content-detail">
                <p>
                  Kết quả test nhanh âm tính với kháng nguyên bề mặt của siêu vi
                  B
                </p>
              </div>
            </div>
            <div className="content-1">
              <div className="content-detail">
                <p>Người khỏe mạnh trong độ tuổi từ đủ 18 đến 60 tuổi</p>
              </div>
              <div className="content-detail">
                <p>Cân nặng: Nam ≥ 45 kg Nữ ≥ 45 kg</p>
              </div>
              <div className="content-detail">
                <p>
                  Thời gian tối thiểu giữa 2 lần hiến máu là 12 tuần đối với cả
                  Nam và Nữ
                </p>
              </div>
              <div className="content-detail">
                <p>
                  Chỉ số huyết sắc tố (Hb) ≥120g/l (≥125g/l nếu hiến từ 350ml
                  trở lên).
                </p>
              </div>
            </div>
          </div>
          <div className="bd-content-bottom">
            <div className="content-bottom-detail">
              <h3>Trước khi hiến máu</h3>
              <ul>
                <li>
                  Đêm trước hiến máu không nên thức quá khuya (ngủ ít nhất 6
                  tiếng).
                </li>
                <li>Nên ăn nhẹ, KHÔNG ăn các đồ ăn có nhiều đạm, nhiều mỡ.</li>
                <li>KHÔNG uống rượu, bia.</li>
                <li>Chuẩn bị tâm lý thực sự thoải mái.</li>
                <li>Mang theo giấy tờ tùy thân.</li>
                <li>Uống nhiều nước.</li>
              </ul>
            </div>
            <div className="content-bottom-detail">
              <h3>Sau khi hiến máu</h3>
              <ul>
                <li>Duỗi thẳng, hơi nâng cao cánh tay trong 15 phút.</li>
                <li>Hạn chế gập tay trong quá trình nghỉ sau hiến máu.</li>
                <li>Nghỉ tại điểm hiến máu tối thiểu 15 phút.</li>
                <li>Uống nhiều nước.</li>
                <li>Chỉ ra về khi cảm thấy thực sự thoải mái.</li>
                <li>
                  Nếu vết băng cầm máu chảy máu, hãy nâng tay lên, ấn nhẹ vào
                  vết bông, ngồi xuống và báo nhân viên y tế hỗ trợ.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="footer-content">
          <p>Bản quyền © 2025 Blood Donation. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
