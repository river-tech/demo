# Danh sách Yêu cầu Kỹ thuật (Technical Requirements)

Dựa trên bản brief xây dựng Cỗ máy tăng trưởng B2B Dương Thành Tín, dưới đây là danh sách phân rã các yêu cầu kỹ thuật dành cho team Frontend và Backend:

## 🖥️ Mảng Frontend (Giao diện & Trải nghiệm Người dùng)

### 1. Kiến trúc UI/UX & Tính khả dụng (UX/UI & Usability)
- **Industrial Design Language:** Giao diện vững chãi, bảng màu Blue/Orange/Grey, font chữ không chân dễ đọc.
- **Thích ứng Đa thiết bị (Mobile First):** Đảm bảo giao diện hiển thị tối ưu và thao tác dễ dàng trên điện thoại di động. Tham vọng đạt điểm số Google PageSpeed trên 90 cho Mobile.
- **Menu Phân Cấp (Persona-based Navigation):** Xây dựng các lối vào rõ ràng cho 3 nhóm đối tượng: Thu mua (tìm kiếm thông số), Chủ thầu (tìm kiếm năng lực), Xưởng nhỏ (tìm kiếm nguồn vải).
- **Nút Kêu gọi Hành động (Sticky CTA):** Thiết kế nút "Nhận báo giá B2B" cố định (sticky) trên màn hình nhưng đảm bảo trải nghiệm đọc không bị che khuất.
- **Tích hợp Nút Tải Tài Liệu (PDF Download):** Thiết kế và bố trí các nút tải file (thông số vải/hồ sơ năng lực) một cách thu hút để dễ dàng thu thập lead.

### 2. Tương tác & Hiển thị Nội dung (Interaction & Content Rendering)
- **Hiển thị Hình ảnh/Video Nâng cao:** Sử dụng thư viện Image Zoom chuyên sâu, cho phép khách hàng phóng to tối đa để xem rõ "đường kim mũi chỉ", "sớ vải" mà không bị vỡ hạt. Tối ưu hóa iframe/nhúng Video quy trình sản xuất (Lazy Loading) để không làm giảm tốc độ tải trang ban đầu.
- **Biểu mẫu Báo giá Đa năng (Conditional Logic Form):** Xây dựng giao diện Form thay đổi linh hoạt các trường nhập liệu dựa trên lựa chọn của người dùng (ví dụ: Chọn "Mua vải" sẽ hiển thị form riêng, chọn "May đồng phục" sẽ hiển thị form riêng).
- **Mã ngắn / Text-to-HTML Clean:** Hạn chế các mã dư thừa, đảm bảo tỷ lệ nội dung văn bản (Text-to-HTML Ratio) cao để thân thiện với bot tìm kiếm.
- **Phương thức Nhận Đơn Hàng Hỗn Hợp (Hybrid Order Processing):** Bố trí rõ ràng Form lấy thông tin chuyên sâu cho B2B lớn, và Nút chat Zalo/Hotline hỗ trợ khách hàng mua lẻ/cần gấp.

---

## ⚙️ Mảng Backend & Hệ thống (Dữ liệu, SEO Technical & Tracking)

### 1. Quản trị Dữ liệu & Hệ thống Cốt lõi (Core System & Data Management)
- **CMS Trải nghiệm Quản trị (Admin Dashboard):** Thiết kế giao diện backend quản lý bài viết, quản lý sản phẩm / chất liệu, và quản trị form liên hệ/đơn hàng với trình soạn thảo (Rich Text Editor).
- **Bảo mật & Máy chủ (Security & SSL):** Thiết lập chứng chỉ bảo mật, hệ thống tự động backup Database và Source code định kỳ.

### 2. Tối ưu AI & Kiến trúc Website (AEO & Architecture)
- **Cấu trúc Phân nhánh Cứng (Physical Silo Structure):** Xây dựng đường dẫn URL phân cấp chặt chẽ (vd: `/may-bao-ho/ao-phan-quang/`) để cả Crawler AI và người dùng đều dễ nhận diện.
- **Sitemap Tự Động (Automated XML Sitemap):** Backend tự động tạo và cập nhật danh sách Sitemap với các chỉ số ưu tiên cho từng trang dịch vụ quan trọng, tự động khai báo lên Google.
- **Logic Liên Kết Nội Bộ (Internal Link Logic):** Thuật toán tự động chèn liên kết từ các bài viết tri thức (AEO context) về các trang dịch vụ/sản phẩm chuyên sâu tương ứng và ngược lại.
- **Quản lý Plugin SEO Nâng cao:** Tích hợp và cấu hình sâu thông số của công cụ SEO Premium (vd: RankMath Pro/Yoast).

### 3. Tự động hóa Khai báo Dữ liệu Cấu trúc (Schema Markup Generator)
*Backend phải thiết lập code để tự động render JSON-LD mà không gây lỗi cú pháp:*
- **Local Business Schema:** Khai báo thông tin doanh nghiệp địa phương (Đà Nẵng), tọa độ map, giờ làm việc và liên kết `sameAs` xác minh thực thể.
- **Product & Service Schema:** Nạp trực tiếp các dữ liệu kỹ thuật cụ thể của bài đăng (vải vóc, thông số bền bỉ, chuẩn Oeko-Tex) vào Data của thẻ JSON.
- **FAQ Schema:** Cho phép admin tạo Q&A và tự động sinh mã Câu hỏi - Trả lời bảo vệ vị trí trang trên Google Search (Top 0/Featured Snippets).
- **Step-by-Step Schema (SOP Flow):** Mã hóa quy trình vận hành 4 bước ra dữ liệu cấu trúc cho AI đọc hiểu năng lực.
- **Organization & Founder Schema:** Khai báo độ uy tín, tiểu sử Founder và tên thương hiệu cho Google E-E-A-T.

### 4. Hệ Tiêu điểm Analytics & Dữ liệu Tiếp thị (Data Flow & Marketing Intelligence)
- **Thiết lập Google Tag Manager (GTM):** Cài đặt GTM làm Hub điều phối toàn bộ các script bên thứ 3.
- **Triển khai Custom Data Layer:** Xây dựng logic Backend đẩy động các dữ liệu chi tiết của khách hàng như "Loại vải yêu cầu", "Số lượng dự kiến" vào vùng Data Layer để GTM bắt lấy.
- **Thiết lập GA4 Key Events & Tracking Chuyển Đổi:** Bắt sự kiện (Event tracking) ở các hành động quan trọng: *Click nút Gọi, Click chat Zalo, Khách điền xong Form (Redirected to Thank-you page), Khách Tải Profile PDF.*
- **Tự động Đồng bộ N8n / Webhook:** Cấu hình Webhook/API để khi Form báo giá được Submit, dữ liệu sẽ được đẩy thẳng sang Google Sheets và bắn cảnh báo thông qua Telegram/Zalo cho quản lý.
- **Cơ chế Redirect Thank-you Page:** Logic xử lý chuyển hướng người dùng an toàn sang trang Cảm ơn để đo lường hoàn tất chuyển đổi 100% chính xác.
