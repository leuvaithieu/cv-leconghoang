import avatar from './avatar.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="avatar">
          <img src={avatar}  alt=""/>
      </div>
    <div className="name">
          <h1>Lê Công Hoàng</h1>
          <div className="specialize">Nhân viên kỹ thuật</div>
          <ul className="contact">
              <li>
                  <span>P</span> +84983113878
              </li>
              <li>
                  <span>E</span> leuvaithieu95@gmail.com
              </li>
              <li>
                  <span>W</span> <a href="https://my-portfolio-hoang-42i7.vercel.app/">https://my-portfolio-hoang-42i7.vercel.app/</a>
              </li>
          </ul>
    </div>
    <div className="info">
          <ul>
              <li>Nơi ở hiện tại: <b>47/36/11/8 Lê Quang Đạo, Nam Từ Liêm, Hà Nội</b> - VietNam</li>
              <li>26/06/1995</li>
              <li>Đại học kinh tế kỹ thuât công nghiệp Hà Nội</li>
          </ul>
    </div>
    <div className="intro">
      <h2>GIỚI THIỆU BẢN THÂN</h2>
      Đã có 1 năm kinh nghiệm bảo hành, lắp đặt, sửa chữa linh kiện máy tính và 2 năm kinh nghiệm là một lập trình viên Front-End.
    </div>
    <div className="experience">
      <h2 className="uppercase">Kinh nghiệm</h2>

      <div className="item">
          <h4>Nhân viên kỹ thuật phần cứng</h4>
          <div className="time d-flex flex-column">
            <span>9/2020 - 8/2021</span>
            <span className="bolt my-10">CÔNG TY CP TƯ VẤN CÔNG NGHỆ THƯƠNG MẠI DUY HƯNG</span>
          </div>
          <div className="des">
              Tiếp nhận tư vấn , lên cấu hình, lắp ráp , cài đặt , nâng cáp cho máy tính để bàn,laptop.
          </div>
          <div className="des">
              Sửa chửa, bảo hành phần cứng. Cài đặt, sửa lỗi phần mềm.
          </div>
      </div>
      <div className="item">
          <h4>Nhân viên lập trình giao diện website</h4>
          <div className="time d-flex flex-column">
            <span>8/2021 - 6/2023</span>
            <span className="bolt my-10">CÔNG TY ĐẦU TƯ QUỐC TẾ BIỂN VÀNG (BIVACO)</span>
          </div>
          <div className="des">
              Tiếp nhận bản thiết kế website từ khách hàng hoặc designer, lập trình giao diện người dùng với HTML, CSS, JS,JQUERY,PHP.
          </div>
          <div className="des">
              Tiếp nhận yêu cầu sửa giao diện từ khách hàng .
          </div>
      </div>
      <div className="education mt-4 ">
          <h2 className="bolt uppercase">Học vấn</h2>
          <h4>Sinh viên</h4>
          <div className="item mt-4">
              
              <div className="time d-flex flex-column">
                  <span>2013 - 2016</span>
                  <span className="uppercase bolt">Đại học thủy lợi cơ sở I</span>
              </div>
              <div className="des">
                  Chuyên ngành : Kỹ thuật công trình xây dựng.
              </div>
          </div>
          <div className="item mt-4">
              
              <div className="time d-flex flex-column">
                  <span>2016 - 2020</span>
                  <span className="uppercase bolt">Đại học Kinh tế kỹ thuật công nghiệp Hà Nội</span>
              </div>
              <div className="des">
                  Chuyên ngành : Kỹ thuật phần mềm.
              </div>
          </div>
      </div>
          <h2 className="skills uppercase bolt">
              Kỹ năng
          </h2>
          <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>MySql</li>
              <li>Git</li>
              <li>ReactJs</li>
          </ul>

    </div>
    <div className="project">
      <h2 className="bolt uppercase">dự án</h2>
      <div className="item">
          <h4>Website Piaggio Công Thành</h4>
          <div className="time">
              11/2021
          </div>
          <div className="web">
              <a href="https://piaggiocongthanh.vn/">Link : https://piaggiocongthanh.vn/</a>
          </div>
          <div className="location">
              Lập trình viên Front-End.
          </div>
          <div className="des">
              Tiếp nhận bản thiết kế từ khách hàng. Thảo luận cùng khách hàng các chức năng và trải nghiệm người dùng cho webside. Lập trình giao diên cho cửa hàng Piaggio Công Thành
              <ul>
                  <li>HTML & CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>PHP</li>
              </ul>
          </div>
      </div>

      <div className="item">
          <h4>Website BTNGROUP</h4>
          <div className="time">
              2021
          </div>
          <div className="web">
              <a href="https://btngroup.vn/">Link: https://btngroup.vn/</a>
          </div>
          <div className="location">
              Lập trình viên Front-End.
          </div>
          <div className="des">
              Tiếp nhận bản thiết kế từ khách hàng. Thảo luận cùng khách hàng các chức năng và trải nghiệm người dùng cho webside. Lập trình giao diên cho cửa hàng Piaggio Công Thành
              <ul>
                  <li>HTML & CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>PHP</li>
              </ul>
          </div>
      </div>

      <div className="item">
          <h4>Website shopping Hưng Ngọc</h4>
          <div className="time">
              2021
          </div>
          <div className="web">
              <a href="http://hungngoc.vn/">Link: http://hungngoc.vn/</a>
          </div>
          <div className="location">
              Lập trình viên Front-End.
          </div>
          <div className="des">
              Tiếp nhận bản thiết kế từ khách hàng. Thảo luận cùng khách hàng các chức năng và trải nghiệm người dùng cho webside. Lập trình giao diên cho cửa hàng Piaggio Công Thành
              <ul>
                  <li>HTML & CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>PHP</li>
              </ul>
          </div>
      </div>
    </div>
</div>
  );
}

export default App;
