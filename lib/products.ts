import {
  Smartphone,
  FileSignature,
  FileText,
  Briefcase,
  ShoppingCart,
  CheckCircle,
  Users,
  BarChart,
  PhoneCall,
  Radio,
  LucideIcon,
} from 'lucide-react'

export interface Product {
  id: number
  name: string
  description: string
  category: string
  detailHref: string
  icon: LucideIcon
  featured?: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Loa Thần Tài MobiFone',
    description: 'Giải pháp loa thông minh ứng dụng AI giúp thông báo giao dịch thanh toán thành công, hỗ trợ cửa hàng nhận tiền nhanh chóng và an toàn.',
    category: 'Thanh toán số / Hộ kinh doanh',
    detailHref: 'https://zalo.me/84902931119',
    icon: Smartphone,
  },
  {
    id: 2,
    name: 'Chữ ký số MOBIFONE CA',
    description: 'Dịch vụ chữ ký số và chứng thư số hỗ trợ ký số hợp đồng, hóa đơn, tài liệu và giao dịch điện tử.',
    category: 'Chữ ký số / Pháp lý điện tử',
    detailHref: 'https://zalo.me/84902931119',
    icon: FileSignature,
    featured: true,
  },
  {
    id: 3,
    name: 'Quản lý hóa đơn điện tử - MobiFone IMS',
    description: 'Giải pháp quản lý hóa đơn điện tử giúp doanh nghiệp kiểm soát, tra cứu và vận hành nghiệp vụ hóa đơn hiệu quả.',
    category: 'Hóa đơn / Quản lý chứng từ',
    detailHref: 'https://zalo.me/84902931119',
    icon: FileText,
  },
  {
    id: 4,
    name: 'Giải pháp quản lý văn bản MobiFone eOffice',
    description: 'Giải pháp quản lý văn bản, công việc và quy trình điều hành nội bộ trên nền tảng số.',
    category: 'Văn phòng số / Điều hành',
    detailHref: 'https://zalo.me/84902931119',
    icon: Briefcase,
    featured: true,
  },
  {
    id: 5,
    name: 'Quản trị doanh nghiệp - Smart Sale for SME (1ERP)',
    description: 'Giải pháp quản trị doanh nghiệp cho SME, hỗ trợ quản lý bán hàng, vận hành và quy trình kinh doanh.',
    category: 'ERP / Quản trị doanh nghiệp',
    detailHref: 'https://zalo.me/84902931119',
    icon: BarChart,
  },
  {
    id: 6,
    name: 'Hợp đồng điện tử - MobiFone eContract',
    description: 'Giải pháp hợp đồng điện tử giúp tạo lập, ký kết, quản lý và lưu trữ hợp đồng an toàn trên môi trường số.',
    category: 'Hợp đồng điện tử / Ký số',
    detailHref: 'https://zalo.me/84902931119',
    icon: FileSignature,
    featured: true,
  },
  {
    id: 7,
    name: 'Quản lý bán hàng - MobiFone 1POS',
    description: 'Giải pháp quản lý bán hàng giúp hộ kinh doanh và cửa hàng quản lý đơn hàng, doanh thu và hoạt động bán lẻ.',
    category: 'Bán hàng / POS',
    detailHref: 'https://zalo.me/84902931119',
    icon: ShoppingCart,
  },
  {
    id: 8,
    name: 'Hóa đơn điện tử - MobiFone Invoice',
    description: 'Giải pháp hóa đơn điện tử hỗ trợ phát hành, ký số, quản lý, tra cứu và lưu trữ hóa đơn.',
    category: 'Hóa đơn điện tử / Kế toán',
    detailHref: 'https://zalo.me/84902931119',
    icon: FileText,
    featured: true,
  },
  {
    id: 9,
    name: 'Giải pháp quản lý công việc MobiFone eWork',
    description: 'Giải pháp quản lý công việc giúp giao việc, theo dõi tiến độ, cộng tác và nâng cao hiệu suất làm việc.',
    category: 'Quản lý công việc / Cộng tác',
    detailHref: 'https://zalo.me/84902931119',
    icon: CheckCircle,
  },
  {
    id: 10,
    name: 'Giải pháp Quản trị nhân sự MobiFone HRM',
    description: 'Giải pháp quản trị nhân sự hỗ trợ quản lý hồ sơ nhân viên, chấm công, quy trình nhân sự và dữ liệu lao động.',
    category: 'HRM / Nhân sự',
    detailHref: 'https://zalo.me/84902931119',
    icon: Users,
  },
  {
    id: 11,
    name: 'Dịch vụ tổng đài Cloud Contact Center (3C)',
    description: 'Giải pháp tổng đài Cloud Contact Center giúp doanh nghiệp quản lý chăm sóc khách hàng, telesales và hiệu suất tổng đài viên.',
    category: 'Tổng đài / Contact Center',
    detailHref: 'https://zalo.me/84902931119',
    icon: PhoneCall,
    featured: true,
  },
  {
    id: 12,
    name: 'Dịch vụ Tổng đài SIP Trunk',
    description: 'Dịch vụ SIP Trunk hỗ trợ kết nối tổng đài doanh nghiệp linh hoạt, tối ưu chi phí thoại và mở rộng hệ thống liên lạc.',
    category: 'Viễn thông / Tổng đài doanh nghiệp',
    detailHref: 'https://zalo.me/84902931119',
    icon: Radio,
  },
]

export const ECOSYSTEM_CATEGORIES = [
  {
    id: 'operations',
    title: 'Vận hành số',
    description: 'Các giải pháp toàn diện cho quản lý vận hành doanh nghiệp',
    products: [4, 9, 10, 5], // eOffice, eWork, HRM, 1ERP
  },
  {
    id: 'legal-documents',
    title: 'Pháp lý & chứng từ điện tử',
    description: 'Giải pháp ký số, hợp đồng và quản lý chứng từ',
    products: [6, 2, 8, 3], // eContract, CA, Invoice, IMS
  },
  {
    id: 'sales-retail',
    title: 'Bán hàng & hộ kinh doanh',
    description: 'Công cụ quản lý bán hàng và thanh toán cho hộ kinh doanh',
    products: [1, 7], // Loa Thần Tài, 1POS
  },
  {
    id: 'communication',
    title: 'Liên lạc doanh nghiệp',
    description: 'Giải pháp tổng đài và chăm sóc khách hàng',
    products: [11, 12], // 3C, SIP Trunk
  },
]
