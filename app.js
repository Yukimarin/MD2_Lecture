// ReactJS
// - Phát triển bởi đội ngũ Facebook
// - Không tối ưu cho SEO (Search Engine Optimization)
// - Tái sử dụng cao và hiệu suất (SPA MPA)
// + SPA (Single Page Application): nhanh hơn khi sử dụng và chỉ cập nhật dữ liệu khi cần thiết
// + MPA (Multy Page Application): tải lại toàn bộ dữ liệu từ SV khi có thao tác người dùng
// - Tương thích ngược
// Các khái niệm cơ bản ReactJs
// ○ Virtual DOM (DOM ảo):
// DOM là gì?
// Nhiều sự kiện ở nhiều trang HTML khác nhau => gây khó khăn cho việc quản lý cũng như bảo trì (maintaince)
// Thao tác với thẻ HTML (HTML element)
// Mỗi hành động đều phải render lại toàn bộ
// Virtual DOM?
// Thao tác Object (đối tượng), React.div hoặc React.p,...
// React sử dụng thuật toán diffing so sánh và đối chiếu => để cập nhật phần thay đổi còn phần không thay đổi sẽ giữ nguyên

// ○ JSX (Javascript + XML)
// XML là những cặp thẻ mở và thẻ đóng(VD: <div></div>)
// - Mô tả giao diện React

// ○ Components
// Có thể tái sử dụng

// ○ Props và State
// Props là thuộc tính và KHÔNG THAY ĐỔI ĐƯỢC, nơi lưu trữ các attribute
// State là trạng thái và CÓ THỂ THAY ĐÔI ĐƯỢC

// ○ React Lifecycle (Vòng đời của 1 component)
// 4 giai đoạn: Khởi tạo - Mouting - Updation - Unmounting
// Chỉ có trong class component

// ONE WAY DATA BINDING
// Nếu truyển dữ liệu từ component cha xuống con sẽ thông qua props
// Nếu muốn truyền dữ liệu từ con lên thì phải thông qua sự kiện
