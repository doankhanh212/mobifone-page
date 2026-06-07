import type { LucideIcon } from 'lucide-react'
import {
  BarChart,
  Briefcase,
  CheckCircle,
  FileSignature,
  FileText,
  Headphones,
  ReceiptText,
  RadioTower,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Users,
} from 'lucide-react'

export type Solution = {
  id: number
  slug: string
  name: string
  shortName: string
  category: string
  badge?: string
  iconName: string
  heroTitle: string
  heroSubtitle: string
  shortDescription: string
  highlights: string[]
  overview: string[]
  painPoints: string[]
  benefits: {
    title: string
    description: string
  }[]
  features: {
    title: string
    description: string
  }[]
  workflow: {
    step: string
    title: string
    description: string
  }[]
  suitableFor: string[]
  faqs: {
    question: string
    answer: string
  }[]
  seoTitle: string
  seoDescription: string
  keywords: string[]
}

export type Product = Solution & {
  description: string
  detailHref: string
  image: string
  icon: LucideIcon
  featured?: boolean
}

export const SITE_URL = 'https://mobifonehcm.com.vn'
export const ZALO_URL = 'https://zalo.me/84902931119'
export const PHONE_HREF = 'tel:0902931119'
export const EMAIL_HREF = 'mailto:trongnghiavo89@gmail.com'

const commonWorkflow = [
  {
    step: '01',
    title: 'Tư vấn nhu cầu',
    description: 'Khảo sát quy trình, số lượng người dùng và mục tiêu chuyển đổi số của đơn vị.',
  },
  {
    step: '02',
    title: 'Thiết kế gói triển khai',
    description: 'Đề xuất cấu hình, phân quyền, dữ liệu cần chuẩn hóa và kế hoạch triển khai phù hợp.',
  },
  {
    step: '03',
    title: 'Cấu hình và đào tạo',
    description: 'Thiết lập hệ thống, hướng dẫn đội ngũ vận hành và bàn giao tài liệu sử dụng.',
  },
  {
    step: '04',
    title: 'Vận hành tối ưu',
    description: 'Theo dõi sau triển khai, hỗ trợ xử lý phát sinh và tối ưu theo phản hồi thực tế.',
  },
]

export const SOLUTIONS: Solution[] = [
  {
    id: 1,
    slug: 'loa-than-tai-mobifone',
    name: 'Loa Thần Tài MobiFone',
    shortName: 'Loa Thần Tài',
    category: 'Thanh toán số / Hộ kinh doanh',
    badge: 'Thanh toán nhanh',
    iconName: 'smartphone',
    heroTitle: 'Loa Thần Tài MobiFone – Xác nhận thanh toán tức thì cho cửa hàng',
    heroSubtitle:
      'Thiết bị loa thông minh hỗ trợ thông báo giao dịch thành công bằng giọng nói, giúp chủ cửa hàng bán hàng liền mạch, giảm nhầm lẫn và yên tâm nhận tiền.',
    shortDescription:
      'Giải pháp loa thông minh ứng dụng AI giúp thông báo giao dịch thanh toán thành công, hỗ trợ cửa hàng nhận tiền nhanh chóng và an toàn.',
    highlights: ['Thông báo giao dịch tức thì', 'Giảm thời gian kiểm tra tài khoản', 'Phù hợp cửa hàng và hộ kinh doanh'],
    overview: [
      'Loa Thần Tài MobiFone là thiết bị hỗ trợ xác nhận kết quả thanh toán bằng âm thanh cho các điểm bán.',
      'Giải pháp giúp người bán không phải liên tục kiểm tra điện thoại hoặc tài khoản ngân hàng trong giờ cao điểm.',
      'Cửa hàng có thể nâng cao tốc độ phục vụ, hạn chế nhầm lẫn giao dịch và tạo trải nghiệm thanh toán chuyên nghiệp hơn.',
    ],
    painPoints: [
      'Nhân viên mất thời gian kiểm tra từng giao dịch chuyển khoản.',
      'Cửa hàng dễ nhầm lẫn khi nhiều khách thanh toán cùng lúc.',
      'Chủ hộ kinh doanh khó theo dõi tình trạng nhận tiền khi bận phục vụ.',
      'Quy trình xác nhận thanh toán thủ công làm chậm tốc độ bán hàng.',
    ],
    benefits: [
      {
        title: 'Nhận biết giao dịch nhanh',
        description: 'Loa phát thông báo rõ ràng khi giao dịch thành công, giúp người bán phản hồi ngay.',
      },
      {
        title: 'Giảm sai sót tại quầy',
        description: 'Hạn chế nhầm lẫn giữa các khoản thanh toán trong thời điểm đông khách.',
      },
      {
        title: 'Tăng tốc phục vụ',
        description: 'Nhân viên tập trung bán hàng thay vì kiểm tra điện thoại hoặc app ngân hàng liên tục.',
      },
      {
        title: 'Dễ triển khai',
        description: 'Phù hợp nhiều mô hình điểm bán như quán ăn, cửa hàng tiện lợi, salon hoặc quầy dịch vụ.',
      },
    ],
    features: [
      {
        title: 'Thông báo bằng giọng nói',
        description: 'Phát âm thanh xác nhận giao dịch để chủ cửa hàng nhận biết nhanh.',
      },
      {
        title: 'Thiết bị nhỏ gọn',
        description: 'Dễ bố trí tại quầy thu ngân, không làm ảnh hưởng không gian bán hàng.',
      },
      {
        title: 'Hỗ trợ vận hành liên tục',
        description: 'Thiết kế cho nhu cầu sử dụng thường xuyên tại điểm bán.',
      },
      {
        title: 'Tối ưu cho hộ kinh doanh',
        description: 'Giúp mô hình bán lẻ nhỏ vận hành chuyên nghiệp mà không cần hệ thống phức tạp.',
      },
      {
        title: 'Tư vấn cấu hình phù hợp',
        description: 'MobiFone hỗ trợ lựa chọn phương án triển khai theo nhu cầu thực tế.',
      },
    ],
    workflow: commonWorkflow,
    suitableFor: ['Cửa hàng bán lẻ', 'Quán ăn, quán cà phê', 'Salon, spa, phòng khám', 'Hộ kinh doanh nhận chuyển khoản'],
    faqs: [
      {
        question: 'Loa Thần Tài phù hợp với mô hình nào?',
        answer: 'Giải pháp phù hợp với cửa hàng, quầy dịch vụ, hộ kinh doanh và các điểm bán thường xuyên nhận thanh toán chuyển khoản.',
      },
      {
        question: 'Loa có giúp giảm nhầm lẫn giao dịch không?',
        answer: 'Có. Việc phát thông báo bằng âm thanh giúp người bán nhận biết giao dịch thành công nhanh hơn trong lúc phục vụ khách.',
      },
      {
        question: 'Có cần đào tạo phức tạp để sử dụng không?',
        answer: 'Không. Giải pháp được thiết kế để vận hành đơn giản tại điểm bán, MobiFone sẽ tư vấn và hướng dẫn khi triển khai.',
      },
      {
        question: 'Có thể dùng cho nhiều quầy trong cùng cửa hàng không?',
        answer: 'Có thể tư vấn phương án theo số lượng quầy và luồng thanh toán thực tế của cửa hàng.',
      },
      {
        question: 'Muốn đăng ký tư vấn thì liên hệ thế nào?',
        answer: 'Bạn có thể nhắn Zalo hoặc gọi 0902 931 119 để được tư vấn cấu hình phù hợp.',
      },
    ],
    seoTitle: 'Loa Thần Tài MobiFone – Thiết Bị Thông Báo Thanh Toán Cho Cửa Hàng',
    seoDescription:
      'Loa Thần Tài MobiFone giúp cửa hàng nhận thông báo giao dịch thanh toán tức thì, giảm nhầm lẫn và tăng tốc phục vụ khách hàng.',
    keywords: ['Loa Thần Tài MobiFone', 'loa thông báo thanh toán', 'thiết bị xác nhận chuyển khoản', 'thanh toán số cửa hàng'],
  },
  {
    id: 2,
    slug: 'mobifone-ca',
    name: 'Chữ ký số MOBIFONE CA',
    shortName: 'MobiFone CA',
    category: 'Chữ ký số / Pháp lý điện tử',
    badge: 'Ký số an toàn',
    iconName: 'shield',
    heroTitle: 'MOBIFONE CA – Chữ ký số cho giao dịch điện tử an toàn',
    heroSubtitle:
      'Dịch vụ chữ ký số và chứng thư số giúp doanh nghiệp ký hợp đồng, hóa đơn, hồ sơ và giao dịch điện tử đúng chuẩn pháp lý.',
    shortDescription:
      'Dịch vụ chữ ký số và chứng thư số hỗ trợ ký số hợp đồng, hóa đơn, tài liệu và giao dịch điện tử.',
    highlights: ['Ký số tài liệu điện tử', 'Đáp ứng nhu cầu pháp lý doanh nghiệp', 'Hỗ trợ nhiều nghiệp vụ số'],
    overview: [
      'MOBIFONE CA hỗ trợ doanh nghiệp xác thực danh tính và ký số trên các giao dịch điện tử.',
      'Giải pháp giúp thay thế thao tác ký tay truyền thống trong nhiều quy trình như hóa đơn, hợp đồng và hồ sơ nội bộ.',
      'Doanh nghiệp rút ngắn thời gian xử lý chứng từ, giảm chi phí vận chuyển giấy tờ và tăng tính an toàn cho giao dịch.',
    ],
    painPoints: [
      'Quy trình ký giấy mất thời gian luân chuyển.',
      'Hồ sơ dễ thất lạc khi xử lý qua nhiều bộ phận.',
      'Doanh nghiệp cần đáp ứng yêu cầu pháp lý cho giao dịch điện tử.',
      'Việc ký tài liệu từ xa chưa thống nhất và khó kiểm soát.',
    ],
    benefits: [
      {
        title: 'Ký nhanh mọi lúc',
        description: 'Hỗ trợ xử lý tài liệu điện tử nhanh hơn, đặc biệt khi lãnh đạo hoặc đối tác ở xa.',
      },
      {
        title: 'Tăng an toàn giao dịch',
        description: 'Chữ ký số giúp xác thực chủ thể ký và bảo vệ tính toàn vẹn của tài liệu.',
      },
      {
        title: 'Giảm chi phí giấy tờ',
        description: 'Hạn chế in ấn, chuyển phát và lưu trữ hồ sơ bản giấy.',
      },
      {
        title: 'Phù hợp nhiều nghiệp vụ',
        description: 'Có thể dùng cho hóa đơn, hợp đồng, hồ sơ kê khai và văn bản nội bộ.',
      },
    ],
    features: [
      {
        title: 'Cấp chứng thư số',
        description: 'Hỗ trợ doanh nghiệp, tổ chức và cá nhân trong nhu cầu xác thực điện tử.',
      },
      {
        title: 'Ký số tài liệu',
        description: 'Ký hợp đồng, hóa đơn, văn bản và hồ sơ điện tử.',
      },
      {
        title: 'Xác thực giao dịch',
        description: 'Tăng độ tin cậy cho các giao dịch phát sinh trên môi trường số.',
      },
      {
        title: 'Tư vấn hồ sơ đăng ký',
        description: 'Hỗ trợ chuẩn bị thông tin và lựa chọn gói phù hợp.',
      },
      {
        title: 'Đồng hành triển khai',
        description: 'Hướng dẫn sử dụng để doanh nghiệp đưa ký số vào quy trình hằng ngày.',
      },
    ],
    workflow: commonWorkflow,
    suitableFor: ['Doanh nghiệp phát hành hóa đơn', 'Bộ phận pháp chế', 'Kế toán và tài chính', 'Đơn vị cần ký hồ sơ từ xa'],
    faqs: [
      {
        question: 'MOBIFONE CA dùng để làm gì?',
        answer: 'Dịch vụ dùng để ký số và xác thực các giao dịch, hồ sơ, hợp đồng, hóa đơn hoặc tài liệu điện tử.',
      },
      {
        question: 'Chữ ký số có phù hợp doanh nghiệp nhỏ không?',
        answer: 'Có. Doanh nghiệp nhỏ vẫn cần ký số cho hóa đơn, kê khai và các giao dịch điện tử thường gặp.',
      },
      {
        question: 'Có hỗ trợ tư vấn hồ sơ đăng ký không?',
        answer: 'Có. MobiFone hỗ trợ tư vấn thông tin cần chuẩn bị và quy trình đăng ký.',
      },
      {
        question: 'Có thể dùng chung với hóa đơn điện tử không?',
        answer: 'Có. Chữ ký số thường được dùng để ký hóa đơn điện tử và các chứng từ liên quan.',
      },
      {
        question: 'Thời gian triển khai phụ thuộc vào yếu tố nào?',
        answer: 'Thời gian phụ thuộc vào hồ sơ đăng ký, loại chứng thư và nhu cầu tích hợp trong quy trình doanh nghiệp.',
      },
    ],
    seoTitle: 'Chữ Ký Số MOBIFONE CA – Giải Pháp Ký Số Cho Doanh Nghiệp',
    seoDescription:
      'MOBIFONE CA hỗ trợ doanh nghiệp ký số hợp đồng, hóa đơn, hồ sơ và giao dịch điện tử an toàn, nhanh chóng.',
    keywords: ['MOBIFONE CA', 'chữ ký số MobiFone', 'ký số doanh nghiệp', 'chứng thư số', 'ký hóa đơn điện tử'],
  },
  {
    id: 3,
    slug: 'mobifone-ims',
    name: 'Quản lý hóa đơn điện tử - MobiFone IMS',
    shortName: 'MobiFone IMS',
    category: 'Hóa đơn / Quản lý chứng từ',
    iconName: 'fileText',
    heroTitle: 'MobiFone IMS – Quản lý hóa đơn điện tử tập trung',
    heroSubtitle:
      'Giải pháp giúp doanh nghiệp lưu trữ, tra cứu, kiểm soát và quản trị hóa đơn điện tử thuận tiện trên một nền tảng chuyên nghiệp.',
    shortDescription:
      'Giải pháp quản lý hóa đơn điện tử giúp doanh nghiệp kiểm soát, tra cứu và vận hành nghiệp vụ hóa đơn hiệu quả.',
    highlights: ['Quản lý hóa đơn tập trung', 'Tra cứu nhanh chứng từ', 'Hỗ trợ quy trình kế toán số'],
    overview: [
      'MobiFone IMS hỗ trợ doanh nghiệp quản lý hóa đơn điện tử theo hướng tập trung và dễ kiểm soát.',
      'Giải pháp giúp kế toán tra cứu, lưu trữ và theo dõi tình trạng hóa đơn nhanh hơn so với cách quản lý rời rạc.',
      'Doanh nghiệp có nền tảng rõ ràng để giảm sai sót chứng từ và cải thiện hiệu quả vận hành kế toán.',
    ],
    painPoints: [
      'Hóa đơn nằm ở nhiều nguồn khác nhau, khó kiểm soát.',
      'Tra cứu chứng từ mất thời gian khi cần đối soát.',
      'Rủi ro thiếu sót dữ liệu trong quá trình lưu trữ.',
      'Bộ phận kế toán cần quy trình quản lý nhất quán hơn.',
    ],
    benefits: [
      {
        title: 'Tập trung dữ liệu',
        description: 'Hỗ trợ quản lý hóa đơn trên một nền tảng để dễ tìm kiếm và kiểm soát.',
      },
      {
        title: 'Tiết kiệm thời gian tra cứu',
        description: 'Kế toán nhanh chóng tìm lại hóa đơn khi cần đối chiếu hoặc lập báo cáo.',
      },
      {
        title: 'Giảm rủi ro thất lạc',
        description: 'Dữ liệu được lưu trữ có hệ thống, hạn chế phụ thuộc vào file rời.',
      },
      {
        title: 'Hỗ trợ chuẩn hóa quy trình',
        description: 'Giúp bộ phận tài chính vận hành thống nhất hơn trong nghiệp vụ hóa đơn.',
      },
    ],
    features: [
      {
        title: 'Lưu trữ hóa đơn',
        description: 'Tổ chức dữ liệu hóa đơn điện tử để phục vụ quản lý dài hạn.',
      },
      {
        title: 'Tra cứu nhanh',
        description: 'Tìm kiếm hóa đơn theo thông tin cần thiết trong quá trình làm việc.',
      },
      {
        title: 'Theo dõi tình trạng chứng từ',
        description: 'Hỗ trợ kiểm soát quá trình xử lý và trạng thái hóa đơn.',
      },
      {
        title: 'Phân quyền sử dụng',
        description: 'Phù hợp cho mô hình nhiều người dùng trong phòng kế toán hoặc chi nhánh.',
      },
      {
        title: 'Tư vấn vận hành',
        description: 'Hỗ trợ doanh nghiệp đưa dữ liệu hóa đơn vào quy trình quản trị số.',
      },
    ],
    workflow: commonWorkflow,
    suitableFor: ['Doanh nghiệp có nhiều hóa đơn', 'Phòng kế toán', 'Chuỗi cửa hàng', 'Đơn vị cần đối soát chứng từ'],
    faqs: [
      {
        question: 'MobiFone IMS khác gì MobiFone Invoice?',
        answer: 'IMS tập trung vào quản lý và lưu trữ hóa đơn, còn Invoice phục vụ nghiệp vụ phát hành hóa đơn điện tử.',
      },
      {
        question: 'Giải pháp có phù hợp doanh nghiệp nhiều chi nhánh không?',
        answer: 'Có. Mô hình quản lý tập trung giúp nhiều chi nhánh cùng kiểm soát dữ liệu nhất quán hơn.',
      },
      {
        question: 'Có hỗ trợ tra cứu hóa đơn nhanh không?',
        answer: 'Có. Hệ thống được thiết kế để hỗ trợ tìm kiếm và quản lý thông tin hóa đơn thuận tiện.',
      },
      {
        question: 'Có cần chuẩn hóa dữ liệu trước khi dùng không?',
        answer: 'Nên chuẩn hóa quy trình và dữ liệu để hệ thống vận hành hiệu quả hơn, MobiFone có thể tư vấn bước này.',
      },
      {
        question: 'Ai nên sử dụng MobiFone IMS?',
        answer: 'Phòng kế toán, tài chính, kiểm soát nội bộ và các doanh nghiệp có nhu cầu quản lý chứng từ điện tử.',
      },
    ],
    seoTitle: 'MobiFone IMS – Giải Pháp Quản Lý Hóa Đơn Điện Tử',
    seoDescription:
      'MobiFone IMS giúp doanh nghiệp quản lý, lưu trữ, tra cứu và kiểm soát hóa đơn điện tử tập trung, thuận tiện.',
    keywords: ['MobiFone IMS', 'quản lý hóa đơn điện tử', 'lưu trữ hóa đơn điện tử', 'quản lý chứng từ điện tử'],
  },
  {
    id: 4,
    slug: 'mobifone-eoffice',
    name: 'Giải pháp quản lý văn bản MobiFone eOffice',
    shortName: 'MobiFone eOffice',
    category: 'Văn phòng số / Điều hành',
    badge: 'Văn phòng số',
    iconName: 'briefcase',
    heroTitle: 'MobiFone eOffice – Số hóa quản lý văn bản và điều hành nội bộ',
    heroSubtitle:
      'Nền tảng giúp doanh nghiệp luân chuyển văn bản, giao việc, phê duyệt và lưu trữ hồ sơ nội bộ theo quy trình rõ ràng.',
    shortDescription:
      'Giải pháp quản lý văn bản, công việc và quy trình điều hành nội bộ trên nền tảng số.',
    highlights: ['Luân chuyển văn bản điện tử', 'Phê duyệt nhanh', 'Giảm phụ thuộc hồ sơ giấy'],
    overview: [
      'MobiFone eOffice giúp doanh nghiệp số hóa quy trình xử lý văn bản và điều hành văn phòng.',
      'Giải pháp phù hợp với các đơn vị thường xuyên sử dụng văn bản để giao việc, công bố thông tin và truyền đạt chỉ đạo.',
      'Doanh nghiệp có thể rút ngắn thời gian xử lý, tăng minh bạch trách nhiệm và lưu trữ hồ sơ khoa học hơn.',
    ],
    painPoints: [
      'Văn bản giấy luân chuyển chậm và khó theo dõi.',
      'Công việc giao qua nhiều kênh không có điểm kiểm soát chung.',
      'Lãnh đạo khó nắm trạng thái xử lý của từng bộ phận.',
      'Tài liệu nội bộ phân tán, khó tìm lại khi cần.',
    ],
    benefits: [
      {
        title: 'Điều hành tập trung',
        description: 'Quản lý văn bản, giao việc và phê duyệt trên một nền tảng thống nhất.',
      },
      {
        title: 'Tăng tốc xử lý',
        description: 'Giảm thời gian luân chuyển hồ sơ và hỗ trợ phê duyệt nhanh hơn.',
      },
      {
        title: 'Minh bạch trách nhiệm',
        description: 'Theo dõi người phụ trách, hạn xử lý và trạng thái từng công việc.',
      },
      {
        title: 'Lưu trữ khoa học',
        description: 'Tài liệu được sắp xếp, tra cứu thuận tiện hơn so với hồ sơ giấy.',
      },
    ],
    features: [
      {
        title: 'Quản lý văn bản đến và đi',
        description: 'Theo dõi vòng đời văn bản từ tiếp nhận đến xử lý và lưu trữ.',
      },
      {
        title: 'Luồng phê duyệt',
        description: 'Thiết lập quy trình duyệt theo vai trò và cơ cấu tổ chức.',
      },
      {
        title: 'Giao việc từ văn bản',
        description: 'Chuyển nội dung chỉ đạo thành nhiệm vụ có người phụ trách rõ ràng.',
      },
      {
        title: 'Tra cứu hồ sơ',
        description: 'Tìm kiếm văn bản theo thông tin, trạng thái hoặc nhóm hồ sơ.',
      },
      {
        title: 'Thông báo tiến độ',
        description: 'Nhắc việc và cập nhật trạng thái để hạn chế trễ hạn.',
      },
    ],
    workflow: commonWorkflow,
    suitableFor: ['Doanh nghiệp vừa và lớn', 'Cơ quan hành chính', 'Trường học', 'Đơn vị nhiều phòng ban'],
    faqs: [
      {
        question: 'MobiFone eOffice giải quyết vấn đề gì?',
        answer: 'Giải pháp giúp số hóa văn bản, giao việc, phê duyệt và lưu trữ hồ sơ nội bộ.',
      },
      {
        question: 'Có thể thiết lập luồng phê duyệt riêng không?',
        answer: 'Có. Quy trình có thể được tư vấn và cấu hình theo cơ cấu tổ chức của từng đơn vị.',
      },
      {
        question: 'Hệ thống có phù hợp cơ quan nhiều phòng ban không?',
        answer: 'Có. eOffice phù hợp với các đơn vị cần quản lý văn bản và trách nhiệm xử lý liên phòng ban.',
      },
      {
        question: 'Có hỗ trợ giảm văn bản giấy không?',
        answer: 'Có. Khi quy trình số được áp dụng, đơn vị có thể giảm in ấn và lưu trữ giấy tờ thủ công.',
      },
      {
        question: 'Triển khai eOffice cần chuẩn bị gì?',
        answer: 'Doanh nghiệp nên chuẩn bị cơ cấu tổ chức, vai trò người dùng và quy trình xử lý văn bản hiện tại.',
      },
    ],
    seoTitle: 'MobiFone eOffice – Giải Pháp Quản Lý Văn Bản Và Văn Phòng Số',
    seoDescription:
      'MobiFone eOffice giúp doanh nghiệp số hóa quản lý văn bản, giao việc, phê duyệt và lưu trữ hồ sơ nội bộ.',
    keywords: ['MobiFone eOffice', 'quản lý văn bản điện tử', 'văn phòng số', 'số hóa văn bản', 'điều hành nội bộ'],
  },
  {
    id: 5,
    slug: 'smart-sale-1erp',
    name: 'Quản trị doanh nghiệp - Smart Sale for SME (1ERP)',
    shortName: 'Smart Sale 1ERP',
    category: 'ERP / Quản trị doanh nghiệp',
    iconName: 'barChart',
    heroTitle: 'Smart Sale for SME (1ERP) – Nền tảng quản trị doanh nghiệp tích hợp',
    heroSubtitle:
      'Bộ giải pháp all-in-one hỗ trợ doanh nghiệp SME số hóa bán hàng, marketing, chăm sóc khách hàng, công việc và quản trị vận hành.',
    shortDescription:
      'Giải pháp quản trị doanh nghiệp cho SME, hỗ trợ quản lý bán hàng, vận hành và quy trình kinh doanh.',
    highlights: ['Quản trị tập trung cho SME', 'Tích hợp bán hàng và vận hành', 'Theo dõi tiến độ theo thời gian thực'],
    overview: [
      'Smart Sale for SME (1ERP) là nền tảng quản lý tài nguyên doanh nghiệp theo hướng tích hợp nhiều module trong một hệ thống.',
      'Giải pháp giúp doanh nghiệp vừa và nhỏ giảm phụ thuộc vào bảng tính rời rạc, đồng thời theo dõi công việc, bán hàng và chăm sóc khách hàng rõ ràng hơn.',
      'Kết quả là đội ngũ có dữ liệu chung để phối hợp, lãnh đạo dễ nắm tiến độ và hiệu quả từng phòng ban.',
    ],
    painPoints: [
      'Dữ liệu bán hàng, khách hàng và công việc nằm ở nhiều công cụ.',
      'Lãnh đạo khó theo dõi tiến độ và chất lượng xử lý.',
      'Quy trình thủ công làm tăng sai sót vận hành.',
      'Doanh nghiệp SME cần công cụ đủ dùng nhưng không quá phức tạp.',
    ],
    benefits: [
      {
        title: 'Quản trị thống nhất',
        description: 'Tập trung thông tin khách hàng, bán hàng và công việc trên một nền tảng.',
      },
      {
        title: 'Tối ưu quy trình SME',
        description: 'Giảm thao tác thủ công và chuẩn hóa cách đội ngũ phối hợp hằng ngày.',
      },
      {
        title: 'Tăng khả năng giám sát',
        description: 'Lãnh đạo dễ theo dõi tiến độ, kết quả và năng lực từng nhóm.',
      },
      {
        title: 'Dễ mở rộng',
        description: 'Có thể triển khai theo module phù hợp với quy mô và ngân sách.',
      },
    ],
    features: [
      {
        title: 'Quản lý bán hàng',
        description: 'Theo dõi khách hàng, cơ hội, đơn hàng và kết quả kinh doanh.',
      },
      {
        title: 'Chăm sóc khách hàng',
        description: 'Hỗ trợ ghi nhận tương tác và quản lý quy trình chăm sóc sau bán.',
      },
      {
        title: 'Quản lý công việc',
        description: 'Phân công, theo dõi tiến độ và đánh giá hiệu quả xử lý.',
      },
      {
        title: 'Báo cáo vận hành',
        description: 'Cung cấp góc nhìn tổng quan cho quản trị kinh doanh.',
      },
      {
        title: 'Tùy chọn module',
        description: 'Tư vấn gói tính năng phù hợp với mô hình của từng doanh nghiệp.',
      },
    ],
    workflow: commonWorkflow,
    suitableFor: ['Doanh nghiệp SME', 'Đội bán hàng', 'Công ty dịch vụ', 'Doanh nghiệp cần quản trị tập trung'],
    faqs: [
      {
        question: 'Smart Sale 1ERP có phải chỉ dành cho bán hàng không?',
        answer: 'Không. Giải pháp hỗ trợ bán hàng, chăm sóc khách hàng, công việc và vận hành doanh nghiệp SME.',
      },
      {
        question: 'Có thể triển khai từng module không?',
        answer: 'Có thể tư vấn theo nhu cầu thực tế để chọn nhóm tính năng phù hợp trước.',
      },
      {
        question: 'Doanh nghiệp nhỏ có dùng được không?',
        answer: 'Có. Giải pháp hướng đến doanh nghiệp vừa và nhỏ cần số hóa quản trị mà vẫn kiểm soát chi phí.',
      },
      {
        question: 'Có hỗ trợ báo cáo cho lãnh đạo không?',
        answer: 'Có. Hệ thống hướng đến việc cung cấp dữ liệu vận hành để theo dõi tiến độ và hiệu quả.',
      },
      {
        question: 'Cần chuẩn bị gì khi triển khai?',
        answer: 'Doanh nghiệp nên chuẩn bị danh sách người dùng, quy trình bán hàng và các biểu mẫu đang sử dụng.',
      },
    ],
    seoTitle: 'Smart Sale For SME 1ERP – Giải Pháp Quản Trị Doanh Nghiệp SME',
    seoDescription:
      'Smart Sale for SME (1ERP) giúp doanh nghiệp vừa và nhỏ quản lý bán hàng, chăm sóc khách hàng, công việc và vận hành tập trung.',
    keywords: ['Smart Sale for SME', '1ERP MobiFone', 'quản trị doanh nghiệp SME', 'phần mềm ERP SME', 'MobiFone Smart Sales'],
  },
  {
    id: 6,
    slug: 'mobifone-econtract',
    name: 'Hợp đồng điện tử - MobiFone eContract',
    shortName: 'MobiFone eContract',
    category: 'Hợp đồng điện tử / Ký số',
    badge: 'Hợp đồng số',
    iconName: 'signature',
    heroTitle: 'MobiFone eContract – Ký kết hợp đồng điện tử nhanh và an toàn',
    heroSubtitle:
      'Giải pháp hỗ trợ tạo lập, ký kết, quản lý và lưu trữ hợp đồng điện tử, giúp doanh nghiệp rút ngắn thời gian giao kết.',
    shortDescription:
      'Giải pháp hợp đồng điện tử giúp tạo lập, ký kết, quản lý và lưu trữ hợp đồng an toàn trên môi trường số.',
    highlights: ['Ký hợp đồng từ xa', 'Lưu trữ hồ sơ điện tử', 'Giảm chi phí giấy tờ và chuyển phát'],
    overview: [
      'MobiFone eContract giúp doanh nghiệp đưa quy trình hợp đồng lên môi trường số từ khởi tạo đến ký kết và lưu trữ.',
      'Giải pháp phù hợp với các tổ chức thường xuyên giao kết hợp đồng, biên bản, thỏa thuận hoặc hồ sơ nội bộ.',
      'Doanh nghiệp rút ngắn thời gian chờ ký, giảm chi phí vận hành và nâng cao trải nghiệm với khách hàng, đối tác.',
    ],
    painPoints: [
      'Hợp đồng giấy mất thời gian in, gửi và theo dõi.',
      'Đối tác ở xa khiến quy trình ký kéo dài.',
      'Hồ sơ hợp đồng khó tìm lại khi cần đối soát.',
      'Doanh nghiệp muốn giảm chi phí chuyển phát và lưu kho.',
    ],
    benefits: [
      {
        title: 'Rút ngắn thời gian ký',
        description: 'Các bên có thể xử lý hợp đồng nhanh hơn mà không phụ thuộc khoảng cách địa lý.',
      },
      {
        title: 'Quản lý tập trung',
        description: 'Hồ sơ hợp đồng được tổ chức để dễ theo dõi trạng thái và tra cứu.',
      },
      {
        title: 'Tối ưu chi phí',
        description: 'Giảm in ấn, chuyển phát và không gian lưu trữ hợp đồng bản giấy.',
      },
      {
        title: 'Nâng cao trải nghiệm đối tác',
        description: 'Quy trình ký số hiện đại giúp giao dịch chuyên nghiệp hơn.',
      },
    ],
    features: [
      {
        title: 'Khởi tạo hợp đồng',
        description: 'Tạo hồ sơ hợp đồng điện tử theo nhu cầu giao kết.',
      },
      {
        title: 'Luồng ký nhiều bên',
        description: 'Theo dõi trình tự ký và trạng thái xử lý của các bên liên quan.',
      },
      {
        title: 'Quản lý mẫu hợp đồng',
        description: 'Hỗ trợ chuẩn hóa biểu mẫu để giảm thao tác lặp lại.',
      },
      {
        title: 'Tra cứu và lưu trữ',
        description: 'Tìm kiếm hợp đồng theo thông tin cần thiết trong quá trình vận hành.',
      },
      {
        title: 'Tư vấn tích hợp ký số',
        description: 'Hỗ trợ kết hợp với chữ ký số trong quy trình giao kết.',
      },
    ],
    workflow: commonWorkflow,
    suitableFor: ['Bộ phận pháp chế', 'Kinh doanh B2B', 'Nhân sự', 'Doanh nghiệp ký nhiều hợp đồng'],
    faqs: [
      {
        question: 'MobiFone eContract dùng cho loại tài liệu nào?',
        answer: 'Giải pháp phù hợp với hợp đồng, thỏa thuận, biên bản và các tài liệu cần ký kết điện tử.',
      },
      {
        question: 'Có thể ký với đối tác ở xa không?',
        answer: 'Có. Đây là một trong những lợi ích chính của hợp đồng điện tử.',
      },
      {
        question: 'Có quản lý được trạng thái ký không?',
        answer: 'Có. Hệ thống hỗ trợ theo dõi quá trình xử lý để doanh nghiệp chủ động nhắc việc.',
      },
      {
        question: 'Có cần chữ ký số không?',
        answer: 'Tùy loại giao dịch và yêu cầu pháp lý, MobiFone có thể tư vấn phương án ký phù hợp.',
      },
      {
        question: 'Hợp đồng điện tử có giúp giảm chi phí không?',
        answer: 'Có. Doanh nghiệp có thể giảm chi phí in ấn, chuyển phát, lưu kho và thời gian xử lý.',
      },
    ],
    seoTitle: 'MobiFone eContract – Giải Pháp Hợp Đồng Điện Tử Cho Doanh Nghiệp',
    seoDescription:
      'MobiFone eContract hỗ trợ tạo lập, ký kết, quản lý và lưu trữ hợp đồng điện tử nhanh chóng, an toàn.',
    keywords: ['MobiFone eContract', 'hợp đồng điện tử', 'ký hợp đồng online', 'quản lý hợp đồng điện tử'],
  },
  {
    id: 7,
    slug: 'mobifone-1pos',
    name: 'Quản lý bán hàng - MobiFone 1POS',
    shortName: 'MobiFone 1POS',
    category: 'Bán hàng / POS',
    iconName: 'shoppingCart',
    heroTitle: 'MobiFone 1POS – Quản lý bán hàng cho cửa hàng và chuỗi điểm bán',
    heroSubtitle:
      'Công cụ giúp quản lý giao dịch, sản phẩm, tồn kho, doanh thu và báo cáo kinh doanh tại cửa hàng hoặc chuỗi bán lẻ.',
    shortDescription:
      'Giải pháp quản lý bán hàng giúp hộ kinh doanh và cửa hàng quản lý đơn hàng, doanh thu và hoạt động bán lẻ.',
    highlights: ['Quản lý đơn hàng và sản phẩm', 'Theo dõi doanh thu điểm bán', 'Phù hợp cửa hàng và chuỗi bán lẻ'],
    overview: [
      'MobiFone 1POS là giải pháp quản lý bán hàng thuộc hệ sinh thái Smart Sale for SME.',
      'Giải pháp giúp cửa hàng xử lý giao dịch, quản lý sản phẩm, thống kê doanh thu và theo dõi hoạt động kinh doanh rõ ràng hơn.',
      'Chủ cửa hàng có dữ liệu để kiểm soát vận hành, giảm tải thao tác thủ công và nâng cao trải nghiệm mua sắm.',
    ],
    painPoints: [
      'Ghi chép bán hàng thủ công dễ sai sót.',
      'Khó kiểm soát doanh thu theo ca hoặc theo điểm bán.',
      'Tồn kho và sản phẩm không được cập nhật kịp thời.',
      'Chuỗi cửa hàng thiếu báo cáo tập trung.',
    ],
    benefits: [
      {
        title: 'Bán hàng nhanh hơn',
        description: 'Hỗ trợ xử lý giao dịch và lưu thông tin đơn hàng gọn gàng.',
      },
      {
        title: 'Kiểm soát doanh thu',
        description: 'Theo dõi kết quả kinh doanh theo cửa hàng hoặc giai đoạn.',
      },
      {
        title: 'Giảm thao tác thủ công',
        description: 'Hạn chế ghi chép rời rạc và giảm sai sót trong vận hành.',
      },
      {
        title: 'Hỗ trợ mở rộng chuỗi',
        description: 'Phù hợp cho đơn vị có nhiều điểm bán cần quản lý thống nhất.',
      },
    ],
    features: [
      {
        title: 'Quản lý giao dịch',
        description: 'Tạo, xử lý và lưu lại thông tin giao dịch bán hàng.',
      },
      {
        title: 'Quản lý sản phẩm',
        description: 'Theo dõi danh mục sản phẩm và thông tin liên quan tại điểm bán.',
      },
      {
        title: 'Báo cáo doanh thu',
        description: 'Hỗ trợ chủ cửa hàng xem kết quả kinh doanh thuận tiện hơn.',
      },
      {
        title: 'Quản lý nhiều điểm bán',
        description: 'Tư vấn mô hình phù hợp cho chuỗi cửa hàng hoặc chi nhánh.',
      },
      {
        title: 'Kết nối hệ sinh thái SME',
        description: 'Có thể kết hợp với các giải pháp quản trị khác khi doanh nghiệp mở rộng.',
      },
    ],
    workflow: commonWorkflow,
    suitableFor: ['Cửa hàng bán lẻ', 'Chuỗi cửa hàng', 'Hộ kinh doanh', 'Doanh nghiệp thương mại'],
    faqs: [
      {
        question: 'MobiFone 1POS phù hợp với cửa hàng nhỏ không?',
        answer: 'Có. Giải pháp phù hợp cả cửa hàng đơn lẻ và mô hình chuỗi cần quản lý tập trung.',
      },
      {
        question: 'Có quản lý được doanh thu không?',
        answer: 'Có. Hệ thống hỗ trợ theo dõi và thống kê kết quả kinh doanh để chủ cửa hàng kiểm soát tốt hơn.',
      },
      {
        question: 'Có dùng cho chuỗi cửa hàng được không?',
        answer: 'Có thể tư vấn cấu hình theo số lượng điểm bán và nhu cầu báo cáo.',
      },
      {
        question: 'Có hỗ trợ quản lý sản phẩm không?',
        answer: 'Có. 1POS hỗ trợ quản lý thông tin sản phẩm phục vụ bán hàng.',
      },
      {
        question: 'Có thể kết hợp với các giải pháp SME khác không?',
        answer: 'Có. 1POS thuộc nhóm giải pháp Smart Sale for SME nên có thể tư vấn kết hợp theo nhu cầu.',
      },
    ],
    seoTitle: 'MobiFone 1POS – Giải Pháp Quản Lý Bán Hàng Cho Cửa Hàng',
    seoDescription:
      'MobiFone 1POS giúp cửa hàng quản lý giao dịch, sản phẩm, doanh thu và hoạt động bán lẻ hiệu quả.',
    keywords: ['MobiFone 1POS', 'phần mềm quản lý bán hàng', 'POS cửa hàng', 'quản lý chuỗi cửa hàng'],
  },
  {
    id: 8,
    slug: 'mobifone-invoice',
    name: 'Hóa đơn điện tử - MobiFone Invoice',
    shortName: 'MobiFone Invoice',
    category: 'Hóa đơn điện tử / Kế toán',
    badge: 'Hóa đơn điện tử',
    iconName: 'receipt',
    heroTitle: 'MobiFone Invoice – Phát hành và quản lý hóa đơn điện tử',
    heroSubtitle:
      'Giải pháp hỗ trợ tổ chức, doanh nghiệp tạo lập, xuất và quản lý phát hành hóa đơn điện tử trực tuyến.',
    shortDescription:
      'Giải pháp hóa đơn điện tử hỗ trợ phát hành, ký số, quản lý, tra cứu và lưu trữ hóa đơn.',
    highlights: ['Phát hành hóa đơn điện tử', 'Hỗ trợ ký số', 'Quản lý hóa đơn trực tuyến'],
    overview: [
      'MobiFone Invoice giúp doanh nghiệp thực hiện nghiệp vụ hóa đơn điện tử theo hướng nhanh, gọn và dễ kiểm soát.',
      'Giải pháp hỗ trợ tạo lập, phát hành, ký số, quản lý và tra cứu hóa đơn trong quá trình vận hành.',
      'Doanh nghiệp giảm phụ thuộc hóa đơn giấy, tối ưu thời gian kế toán và đáp ứng nhu cầu quản lý hóa đơn hiện đại.',
    ],
    painPoints: [
      'Phát hành hóa đơn thủ công mất thời gian.',
      'Kế toán phải xử lý nhiều hóa đơn trong thời gian ngắn.',
      'Tra cứu và lưu trữ hóa đơn chưa thuận tiện.',
      'Doanh nghiệp cần quy trình hóa đơn điện tử ổn định.',
    ],
    benefits: [
      {
        title: 'Phát hành nhanh',
        description: 'Hỗ trợ tạo và phát hành hóa đơn điện tử thuận tiện hơn.',
      },
      {
        title: 'Giảm giấy tờ',
        description: 'Tối ưu chi phí in ấn và lưu trữ hóa đơn bản giấy.',
      },
      {
        title: 'Quản lý trực tuyến',
        description: 'Hóa đơn được quản lý trên nền tảng số, dễ tra cứu và theo dõi.',
      },
      {
        title: 'Hỗ trợ nghiệp vụ kế toán',
        description: 'Giúp bộ phận kế toán xử lý hóa đơn chuyên nghiệp hơn.',
      },
    ],
    features: [
      {
        title: 'Tạo lập hóa đơn',
        description: 'Hỗ trợ tạo hóa đơn điện tử phục vụ bán hàng và cung cấp dịch vụ.',
      },
      {
        title: 'Ký số hóa đơn',
        description: 'Kết hợp chữ ký số để hoàn thiện nghiệp vụ phát hành.',
      },
      {
        title: 'Quản lý phát hành',
        description: 'Theo dõi hóa đơn đã phát hành và thông tin liên quan.',
      },
      {
        title: 'Tra cứu hóa đơn',
        description: 'Hỗ trợ tìm kiếm hóa đơn khi cần đối soát hoặc chăm sóc khách hàng.',
      },
      {
        title: 'Tư vấn triển khai',
        description: 'Hỗ trợ doanh nghiệp đưa hóa đơn điện tử vào quy trình kế toán.',
      },
    ],
    workflow: commonWorkflow,
    suitableFor: ['Doanh nghiệp bán hàng', 'Công ty dịch vụ', 'Phòng kế toán', 'Hộ kinh doanh cần xuất hóa đơn'],
    faqs: [
      {
        question: 'MobiFone Invoice dùng để làm gì?',
        answer: 'Giải pháp hỗ trợ tạo lập, phát hành, ký số, quản lý và tra cứu hóa đơn điện tử.',
      },
      {
        question: 'Có cần chữ ký số để phát hành hóa đơn không?',
        answer: 'Tùy nghiệp vụ và yêu cầu phát hành, hóa đơn điện tử thường cần tích hợp ký số phù hợp.',
      },
      {
        question: 'Có hỗ trợ doanh nghiệp mới chuyển sang hóa đơn điện tử không?',
        answer: 'Có. MobiFone có thể tư vấn quy trình triển khai và hướng dẫn sử dụng.',
      },
      {
        question: 'MobiFone Invoice có giúp tra cứu hóa đơn không?',
        answer: 'Có. Giải pháp hỗ trợ quản lý và tra cứu hóa đơn trong quá trình vận hành.',
      },
      {
        question: 'Ai nên dùng MobiFone Invoice?',
        answer: 'Các tổ chức, doanh nghiệp, hộ kinh doanh có nhu cầu phát hành và quản lý hóa đơn điện tử.',
      },
    ],
    seoTitle: 'MobiFone Invoice – Giải Pháp Hóa Đơn Điện Tử Cho Doanh Nghiệp',
    seoDescription:
      'MobiFone Invoice hỗ trợ doanh nghiệp tạo lập, phát hành, ký số, quản lý và tra cứu hóa đơn điện tử trực tuyến.',
    keywords: ['MobiFone Invoice', 'hóa đơn điện tử MobiFone', 'phát hành hóa đơn điện tử', 'phần mềm hóa đơn điện tử'],
  },
  {
    id: 9,
    slug: 'mobifone-ework',
    name: 'Giải pháp quản lý công việc MobiFone eWork',
    shortName: 'MobiFone eWork',
    category: 'Quản lý công việc / Cộng tác',
    iconName: 'check',
    heroTitle: 'MobiFone eWork – Quản lý công việc, dự án và hiệu suất đội ngũ',
    heroSubtitle:
      'Nền tảng web và di động hỗ trợ phân công, theo dõi tiến độ, quản lý lịch làm việc, phối hợp nội bộ và đánh giá hiệu quả công việc.',
    shortDescription:
      'Giải pháp quản lý công việc giúp giao việc, theo dõi tiến độ, cộng tác và nâng cao hiệu suất làm việc.',
    highlights: ['Giao việc rõ người rõ hạn', 'Theo dõi tiến độ tập trung', 'Cộng tác trên web và di động'],
    overview: [
      'MobiFone eWork giúp doanh nghiệp quản lý công việc, dự án và tương tác nội bộ trên nền tảng số.',
      'Giải pháp hỗ trợ phân công, theo dõi tiến độ, quản lý lịch và báo cáo hiệu quả làm việc.',
      'Đội ngũ có cách phối hợp minh bạch hơn, giảm bỏ sót việc và tăng khả năng kiểm soát của quản lý.',
    ],
    painPoints: [
      'Công việc giao qua chat dễ trôi thông tin.',
      'Quản lý khó biết ai đang phụ trách việc gì.',
      'Trễ hạn không được phát hiện kịp thời.',
      'Báo cáo tiến độ phải tổng hợp thủ công.',
    ],
    benefits: [
      {
        title: 'Minh bạch trách nhiệm',
        description: 'Mỗi nhiệm vụ có người phụ trách, thời hạn và trạng thái rõ ràng.',
      },
      {
        title: 'Theo dõi tiến độ',
        description: 'Quản lý nắm nhanh tình hình xử lý của từng cá nhân hoặc nhóm.',
      },
      {
        title: 'Cộng tác tốt hơn',
        description: 'Thông tin công việc được tập trung, giảm phụ thuộc vào nhiều kênh rời rạc.',
      },
      {
        title: 'Nâng cao hiệu suất',
        description: 'Dữ liệu công việc hỗ trợ đánh giá và cải thiện cách vận hành.',
      },
    ],
    features: [
      {
        title: 'Phân công nhiệm vụ',
        description: 'Giao việc theo người phụ trách, thời hạn và mức độ ưu tiên.',
      },
      {
        title: 'Quản lý dự án',
        description: 'Theo dõi các nhóm công việc theo dự án hoặc phòng ban.',
      },
      {
        title: 'Lịch làm việc',
        description: 'Hỗ trợ sắp xếp kế hoạch và nhắc lịch xử lý.',
      },
      {
        title: 'Trao đổi nội bộ',
        description: 'Giúp đội ngũ phối hợp và cập nhật thông tin trong bối cảnh công việc.',
      },
      {
        title: 'Báo cáo hiệu quả',
        description: 'Cung cấp dữ liệu để đánh giá tiến độ và chất lượng xử lý.',
      },
    ],
    workflow: commonWorkflow,
    suitableFor: ['Đội dự án', 'Phòng kinh doanh', 'Bộ phận vận hành', 'Doanh nghiệp làm việc đa chi nhánh'],
    faqs: [
      {
        question: 'MobiFone eWork có dùng trên di động không?',
        answer: 'Giải pháp hướng đến sử dụng trên nền tảng web và di động để đội ngũ theo dõi công việc linh hoạt.',
      },
      {
        question: 'Có quản lý được dự án không?',
        answer: 'Có. Doanh nghiệp có thể tổ chức công việc theo dự án, nhóm hoặc phòng ban.',
      },
      {
        question: 'Có giúp giảm bỏ sót việc không?',
        answer: 'Có. Việc có người phụ trách, hạn xử lý và trạng thái rõ ràng giúp giảm rủi ro bỏ sót.',
      },
      {
        question: 'Quản lý có xem được báo cáo không?',
        answer: 'Có. Hệ thống hỗ trợ dữ liệu để theo dõi tiến độ và hiệu quả công việc.',
      },
      {
        question: 'eWork phù hợp với doanh nghiệp quy mô nào?',
        answer: 'Phù hợp với đội nhóm nhỏ đến doanh nghiệp nhiều phòng ban cần quản lý công việc tập trung.',
      },
    ],
    seoTitle: 'MobiFone eWork – Giải Pháp Quản Lý Công Việc Và Dự Án',
    seoDescription:
      'MobiFone eWork giúp doanh nghiệp giao việc, theo dõi tiến độ, quản lý dự án và nâng cao hiệu suất đội ngũ.',
    keywords: ['MobiFone eWork', 'quản lý công việc', 'phần mềm giao việc', 'quản lý dự án', 'nâng cao hiệu suất'],
  },
  {
    id: 10,
    slug: 'mobifone-hrm',
    name: 'Giải pháp Quản trị nhân sự MobiFone HRM',
    shortName: 'MobiFone HRM',
    category: 'HRM / Nhân sự',
    iconName: 'users',
    heroTitle: 'MobiFone HRM – Quản trị nhân sự tổng thể trên nền tảng số',
    heroSubtitle:
      'Giải pháp giúp doanh nghiệp số hóa tuyển dụng, hồ sơ nhân sự, chấm công, tính lương, đào tạo và quản trị nguồn nhân lực.',
    shortDescription:
      'Giải pháp quản trị nhân sự hỗ trợ quản lý hồ sơ nhân viên, chấm công, quy trình nhân sự và dữ liệu lao động.',
    highlights: ['Quản lý hồ sơ nhân sự', 'Chấm công và tính lương', 'Hỗ trợ tuyển dụng, đào tạo'],
    overview: [
      'MobiFone HRM là giải pháp quản trị nhân sự tổng thể giúp doanh nghiệp số hóa nhiều nghiệp vụ nhân sự cốt lõi.',
      'Hệ thống hỗ trợ quản lý tuyển dụng, thông tin nhân sự, chấm công, tính lương và các quy trình liên quan.',
      'Doanh nghiệp giảm thao tác thủ công, chuẩn hóa dữ liệu nhân sự và nâng cao chất lượng quản trị nguồn lực.',
    ],
    painPoints: [
      'Hồ sơ nhân sự lưu trữ phân tán, khó cập nhật.',
      'Chấm công và tính lương mất nhiều thời gian.',
      'Quy trình tuyển dụng, đào tạo chưa có dữ liệu tập trung.',
      'Lãnh đạo thiếu báo cáo nhân sự kịp thời.',
    ],
    benefits: [
      {
        title: 'Dữ liệu nhân sự tập trung',
        description: 'Quản lý hồ sơ, thông tin lao động và quá trình làm việc có hệ thống.',
      },
      {
        title: 'Giảm tải hành chính',
        description: 'Tối ưu các nghiệp vụ chấm công, tính lương và cập nhật hồ sơ.',
      },
      {
        title: 'Chuẩn hóa quy trình',
        description: 'Hỗ trợ doanh nghiệp thiết lập quy trình nhân sự nhất quán.',
      },
      {
        title: 'Báo cáo quản trị',
        description: 'Cung cấp dữ liệu phục vụ quyết định về nguồn nhân lực.',
      },
    ],
    features: [
      {
        title: 'Quản lý tuyển dụng',
        description: 'Theo dõi nhu cầu tuyển, ứng viên và tiến độ tuyển dụng.',
      },
      {
        title: 'Hồ sơ nhân sự',
        description: 'Lưu trữ thông tin nhân viên, hợp đồng và dữ liệu lao động.',
      },
      {
        title: 'Chấm công',
        description: 'Hỗ trợ ghi nhận và quản lý dữ liệu chấm công.',
      },
      {
        title: 'Tính lương',
        description: 'Hỗ trợ nghiệp vụ tính lương theo cấu hình phù hợp.',
      },
      {
        title: 'Đào tạo và phát triển',
        description: 'Theo dõi hoạt động đào tạo, năng lực và phát triển nhân sự.',
      },
    ],
    workflow: commonWorkflow,
    suitableFor: ['Phòng nhân sự', 'Doanh nghiệp nhiều nhân viên', 'Chuỗi cửa hàng', 'Đơn vị cần chuẩn hóa chấm công lương'],
    faqs: [
      {
        question: 'MobiFone HRM gồm những phân hệ nào?',
        answer: 'Giải pháp hỗ trợ các nghiệp vụ như tuyển dụng, hồ sơ nhân sự, chấm công, tính lương và đào tạo.',
      },
      {
        question: 'Có phù hợp doanh nghiệp nhiều chi nhánh không?',
        answer: 'Có. HRM giúp quản lý dữ liệu nhân sự tập trung cho mô hình nhiều bộ phận hoặc địa điểm.',
      },
      {
        question: 'Có hỗ trợ chấm công và tính lương không?',
        answer: 'Có. Đây là hai nhóm nghiệp vụ quan trọng trong giải pháp MobiFone HRM.',
      },
      {
        question: 'Có thể nhập dữ liệu nhân sự hiện có không?',
        answer: 'MobiFone có thể tư vấn cách chuẩn hóa và chuyển dữ liệu theo tình trạng thực tế.',
      },
      {
        question: 'HRM giúp lãnh đạo như thế nào?',
        answer: 'Hệ thống giúp cung cấp dữ liệu nhân sự rõ ràng hơn để theo dõi nguồn lực và ra quyết định.',
      },
    ],
    seoTitle: 'MobiFone HRM – Giải Pháp Quản Trị Nhân Sự Tổng Thể',
    seoDescription:
      'MobiFone HRM giúp doanh nghiệp quản lý tuyển dụng, hồ sơ nhân sự, chấm công, tính lương và đào tạo trên nền tảng số.',
    keywords: ['MobiFone HRM', 'quản trị nhân sự', 'phần mềm HRM', 'chấm công tính lương', 'quản lý hồ sơ nhân sự'],
  },
  {
    id: 11,
    slug: 'cloud-contact-center-3c',
    name: 'Dịch vụ tổng đài Cloud Contact Center (3C)',
    shortName: 'Cloud Contact Center 3C',
    category: 'Tổng đài / Contact Center',
    badge: 'Chăm sóc khách hàng',
    iconName: 'headphones',
    heroTitle: 'Cloud Contact Center 3C – Tổng đài cloud cho chăm sóc khách hàng hiện đại',
    heroSubtitle:
      'Giải pháp tổng đài trên nền tảng cloud giúp doanh nghiệp quản lý cuộc gọi, telesales, chăm sóc khách hàng và hiệu suất tổng đài viên.',
    shortDescription:
      'Giải pháp tổng đài Cloud Contact Center giúp doanh nghiệp quản lý chăm sóc khách hàng, telesales và hiệu suất tổng đài viên.',
    highlights: ['Tổng đài cloud linh hoạt', 'Quản lý hiệu suất nhân viên', 'Hỗ trợ chăm sóc khách hàng đa kịch bản'],
    overview: [
      'Cloud Contact Center 3C giúp doanh nghiệp xây dựng trung tâm liên lạc khách hàng trên nền tảng cloud.',
      'Giải pháp hỗ trợ quản lý cuộc gọi, hàng đợi, ghi nhận tương tác và theo dõi hiệu suất đội ngũ chăm sóc khách hàng.',
      'Doanh nghiệp có thể nâng cao chất lượng phục vụ, kiểm soát dữ liệu cuộc gọi và tối ưu hoạt động telesales.',
    ],
    painPoints: [
      'Tổng đài truyền thống khó mở rộng khi tăng nhân sự.',
      'Quản lý không có đủ dữ liệu đánh giá chất lượng cuộc gọi.',
      'Khách hàng chờ lâu hoặc bị bỏ lỡ cuộc gọi.',
      'Đội telesales thiếu công cụ theo dõi hiệu suất.',
    ],
    benefits: [
      {
        title: 'Linh hoạt mở rộng',
        description: 'Nền tảng cloud giúp doanh nghiệp dễ tư vấn cấu hình theo quy mô đội ngũ.',
      },
      {
        title: 'Quản lý cuộc gọi tốt hơn',
        description: 'Theo dõi trạng thái cuộc gọi, hàng đợi và hoạt động của tổng đài viên.',
      },
      {
        title: 'Nâng cao chất lượng phục vụ',
        description: 'Dữ liệu vận hành giúp cải thiện kịch bản chăm sóc khách hàng.',
      },
      {
        title: 'Tối ưu telesales',
        description: 'Hỗ trợ giám sát năng suất và kết quả làm việc của đội gọi ra.',
      },
    ],
    features: [
      {
        title: 'Quản lý gọi đến và gọi ra',
        description: 'Hỗ trợ các kịch bản inbound và outbound trong chăm sóc khách hàng.',
      },
      {
        title: 'Hàng đợi thông minh',
        description: 'Giúp phân bổ và kiểm soát cuộc gọi hiệu quả hơn.',
      },
      {
        title: 'Ghi nhận lịch sử tương tác',
        description: 'Lưu dữ liệu phục vụ theo dõi chất lượng và chăm sóc sau cuộc gọi.',
      },
      {
        title: 'Báo cáo hiệu suất',
        description: 'Cung cấp thông tin để quản lý tổng đài viên và chiến dịch gọi.',
      },
      {
        title: 'Tư vấn tích hợp',
        description: 'Có thể tư vấn kết nối với CRM hoặc hệ thống nội bộ theo nhu cầu.',
      },
    ],
    workflow: commonWorkflow,
    suitableFor: ['Trung tâm chăm sóc khách hàng', 'Đội telesales', 'Doanh nghiệp dịch vụ', 'Phòng hỗ trợ kỹ thuật'],
    faqs: [
      {
        question: 'Cloud Contact Center 3C phù hợp với doanh nghiệp nào?',
        answer: 'Giải pháp phù hợp với doanh nghiệp cần quản lý cuộc gọi chăm sóc khách hàng, telesales hoặc hỗ trợ kỹ thuật.',
      },
      {
        question: 'Tổng đài cloud có dễ mở rộng không?',
        answer: 'Có. MobiFone có thể tư vấn cấu hình theo số lượng nhân sự và nhu cầu vận hành.',
      },
      {
        question: 'Có theo dõi hiệu suất tổng đài viên không?',
        answer: 'Có. Hệ thống hỗ trợ dữ liệu để quản lý hoạt động và đánh giá hiệu suất đội ngũ.',
      },
      {
        question: 'Có hỗ trợ gọi đến và gọi ra không?',
        answer: 'Có. Giải pháp phù hợp cho cả chăm sóc khách hàng và telesales.',
      },
      {
        question: 'Có thể tích hợp CRM không?',
        answer: 'Có thể tư vấn tích hợp theo hệ thống hiện có và mục tiêu vận hành của doanh nghiệp.',
      },
    ],
    seoTitle: 'Cloud Contact Center 3C – Tổng Đài Cloud MobiFone Cho Doanh Nghiệp',
    seoDescription:
      'Cloud Contact Center 3C giúp doanh nghiệp quản lý cuộc gọi, chăm sóc khách hàng, telesales và hiệu suất tổng đài viên.',
    keywords: ['Cloud Contact Center 3C', 'tổng đài cloud MobiFone', 'contact center', 'tổng đài chăm sóc khách hàng'],
  },
  {
    id: 12,
    slug: 'truyen-thanh-thong-minh',
    name: 'Truyền thanh thông minh',
    shortName: 'Truyền thanh thông minh',
    category: 'Chính phủ số / Truyền thanh số',
    badge: 'Truyền thanh 4.0',
    iconName: 'radioTower',
    heroTitle: 'Truyền thanh thông minh – Giải pháp truyền thanh số trên nền tảng 4.0',
    heroSubtitle:
      'Giải pháp giúp địa phương phát thanh thông tin tới người dân qua 3G/4G/Internet, quản lý thiết bị phát thanh tập trung, đặt lịch phát bản tin, phát tin khẩn cấp và chuyển đổi văn bản thành giọng nói bằng AI.',
    shortDescription:
      'Giải pháp truyền thanh số giúp địa phương phát tin qua 3G/4G/Internet, quản lý thiết bị từ xa, đặt lịch và chuyển văn bản thành giọng nói bằng AI.',
    highlights: [
      'Phát thanh không dây qua 3G/4G/Internet',
      'Quản lý thiết bị phát thanh từ xa',
      'Hỗ trợ AI Text-to-Speech và đặt lịch phát bản tin',
    ],
    overview: [
      'Truyền thanh thông minh là giải pháp truyền thanh kỹ thuật số thế hệ mới, ứng dụng công nghệ IP, IoT và AI Text-to-Speech.',
      'Giải pháp giúp địa phương phát thanh, đặt lịch phát, phát tin khẩn cấp và quản lý thiết bị từ xa trên nền tảng tập trung.',
      'Phù hợp cho phường/xã, quận/huyện, khu dân cư, khu công nghiệp, tòa nhà, trường học hoặc các đơn vị cần truyền tải thông tin nhanh chóng.',
    ],
    painPoints: [
      'Hệ thống truyền thanh truyền thống khó quản lý thiết bị theo từng địa bàn.',
      'Phát bản tin thủ công mất thời gian và khó đặt lịch cố định.',
      'Truyền thanh có dây hoặc AM/FM dễ phát sinh chi phí vận hành, nhiễu sóng và chồng chéo vùng phủ.',
      'Địa phương cần kênh phát tin khẩn cấp nhanh, rõ ràng và có thể điều khiển từ xa.',
    ],
    benefits: [
      {
        title: 'Phát thanh không dây, đảm bảo mỹ quan đô thị',
        description: 'Giảm phụ thuộc vào hệ thống dây kéo dài, phù hợp triển khai tại nhiều địa bàn.',
      },
      {
        title: 'Quản lý thiết bị bằng IoT',
        description: 'Theo dõi và điều khiển thiết bị phát thanh từ xa trên nền tảng quản trị tập trung.',
      },
      {
        title: 'Khắc phục hạn chế của truyền thanh truyền thống',
        description: 'Hạn chế bất tiện trong vận hành, lên lịch và quản lý tình trạng thiết bị.',
      },
      {
        title: 'Kết nối chính quyền và người dân',
        description: 'Giúp thông tin địa phương được truyền tải nhanh chóng, nhất quán và dễ tiếp cận hơn.',
      },
      {
        title: 'Hỗ trợ dịch vụ công trực tuyến',
        description: 'Có thể mở rộng tích hợp các tiện ích phục vụ người dân trong hệ sinh thái số.',
      },
      {
        title: 'Dễ mở rộng theo nhu cầu địa phương',
        description: 'Phù hợp triển khai theo cấp xã, huyện, khu dân cư, trường học hoặc khu công nghiệp.',
      },
    ],
    features: [
      {
        title: 'Phát thanh thông tin từ điện thoại, máy tính bảng, laptop hoặc PC',
        description: 'Cán bộ phụ trách có thể phát tin linh hoạt trên các thiết bị kết nối Internet.',
      },
      {
        title: 'Đặt lịch phát sóng theo giờ, ngày, tuần',
        description: 'Tự động hóa lịch phát bản tin định kỳ để giảm thao tác vận hành thủ công.',
      },
      {
        title: 'Chuyển đổi văn bản thành giọng nói',
        description: 'Ứng dụng AI Text-to-Speech để tạo file phát thanh từ nội dung văn bản.',
      },
      {
        title: 'Quản lý thiết bị Mira và mGateway từ xa',
        description: 'Theo dõi trạng thái, điều chỉnh âm lượng, bật tắt và điều khiển thiết bị từ website quản trị.',
      },
      {
        title: 'Biên soạn và phát hành tin tức địa phương',
        description: 'Quản lý nội dung truyền thông và phát hành thông tin tới ứng dụng người dân.',
      },
      {
        title: 'Người dân nghe lại tin tức trên ứng dụng di động',
        description: 'Hỗ trợ người dân tiếp cận lại các thông báo quan trọng khi cần.',
      },
      {
        title: 'Mở rộng tiện ích như thanh toán trực tuyến, cổng dịch vụ công, smart home',
        description: 'Nền tảng có thể phát triển thêm các tiện ích số phục vụ cộng đồng.',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Khảo sát địa bàn',
        description: 'Đánh giá khu vực phủ âm, số lượng cụm loa, thiết bị và nhu cầu quản lý thông tin địa phương.',
      },
      {
        step: '02',
        title: 'Thiết kế mô hình thiết bị',
        description: 'Đề xuất phương án Mira, mGateway, ứng dụng di động và hệ thống quản trị phù hợp.',
      },
      {
        step: '03',
        title: 'Cấu hình quản trị',
        description: 'Thiết lập tài khoản, phân quyền, địa bàn, lịch phát và quy trình duyệt nội dung.',
      },
      {
        step: '04',
        title: 'Đào tạo vận hành',
        description: 'Hướng dẫn phát tin, đặt lịch, chuyển văn bản thành giọng nói và kiểm tra thiết bị từ xa.',
      },
      {
        step: '05',
        title: 'Mở rộng tiện ích',
        description: 'Tư vấn tích hợp thêm dịch vụ công, thanh toán trực tuyến hoặc các tiện ích cộng đồng khi cần.',
      },
    ],
    suitableFor: ['Phường/xã, quận/huyện', 'Khu dân cư, tổ dân phố', 'Khu công nghiệp', 'Tòa nhà, trường học, đơn vị công cộng'],
    faqs: [
      {
        question: 'Truyền thanh thông minh khác gì truyền thanh truyền thống?',
        answer:
          'Giải pháp ứng dụng IP, IoT và nền tảng quản trị tập trung để phát tin, đặt lịch và quản lý thiết bị từ xa, hạn chế các bất tiện của hệ thống truyền thanh cũ.',
      },
      {
        question: 'Có thể phát bản tin từ xa không?',
        answer: 'Có. Người phụ trách có thể phát tin qua thiết bị kết nối Internet như điện thoại, máy tính bảng, laptop hoặc PC.',
      },
      {
        question: 'Có hỗ trợ đặt lịch phát không?',
        answer: 'Có. Hệ thống hỗ trợ đặt lịch phát bản tin theo giờ, ngày hoặc tuần để tự động hóa vận hành.',
      },
      {
        question: 'Có chuyển văn bản thành giọng nói không?',
        answer: 'Có. Giải pháp hỗ trợ AI Text-to-Speech để chuyển nội dung văn bản thành bản tin phát thanh.',
      },
      {
        question: 'Có quản lý được từng cụm loa không?',
        answer: 'Có. Nền tảng quản trị hỗ trợ quản lý thiết bị phát thanh theo địa bàn và trạng thái vận hành.',
      },
      {
        question: 'Giải pháp truyền nhận thông tin qua hình thức nào?',
        answer: 'Hệ thống có thể truyền nhận bản tin qua 3G, 4G hoặc Internet tùy phương án triển khai.',
      },
      {
        question: 'Hệ thống có phù hợp triển khai diện rộng không?',
        answer: 'Có. Giải pháp phù hợp cho mô hình triển khai theo xã, phường, quận, huyện hoặc các khu vực cần phát tin tập trung.',
      },
    ],
    seoTitle: 'Truyền Thanh Thông Minh MobiFone – Giải Pháp Truyền Thanh Số 4.0',
    seoDescription:
      'Truyền thanh thông minh MobiFone giúp địa phương phát thanh qua 3G/4G/Internet, quản lý thiết bị từ xa, đặt lịch phát, phát tin khẩn cấp và chuyển văn bản thành giọng nói bằng AI.',
    keywords: [
      'truyền thanh thông minh',
      'truyền thanh số',
      'truyền thanh 4.0',
      'MobiFone truyền thanh thông minh',
      'phát thanh qua 4G',
      'phát thanh qua Internet',
      'AI text to speech',
      'quản lý thiết bị phát thanh',
      'chính phủ số',
      'truyền thanh cơ sở',
    ],
  },
]

export const iconMap: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  shield: ShieldCheck,
  fileText: FileText,
  briefcase: Briefcase,
  barChart: BarChart,
  signature: FileSignature,
  shoppingCart: ShoppingCart,
  receipt: ReceiptText,
  check: CheckCircle,
  users: Users,
  headphones: Headphones,
  radioTower: RadioTower,
}

export const solutionImages: Record<string, string> = {
  'loa-than-tai-mobifone': '/1.jpg',
  'mobifone-ca': '/2.jpg',
  'mobifone-ims': '/3.jpg',
  'mobifone-eoffice': '/4.jpg',
  'smart-sale-1erp': '/5.jpg',
  'mobifone-econtract': '/6.jpg',
  'mobifone-1pos': '/7.jpg',
  'mobifone-invoice': '/8.jpg',
  'mobifone-ework': '/9.png',
  'mobifone-hrm': '/10.png',
  'cloud-contact-center-3c': '/11.jpg',
  'truyen-thanh-thong-minh': '/truyen-thanh-thong-minh.svg',
}

export function getSolutionIcon(iconName: string) {
  return iconMap[iconName] ?? FileText
}

export function getSolutionImage(solution: Pick<Solution, 'slug'>) {
  return solutionImages[solution.slug] ?? '/mobifone_tech_hero.gif'
}

export function getSolutionBySlug(slug: string) {
  return SOLUTIONS.find((solution) => solution.slug === slug)
}

export function getRelatedSolutions(solution: Solution, limit = 3) {
  const category = ECOSYSTEM_CATEGORIES.find((item) => item.products.includes(solution.id))
  const ids = category?.products.filter((id) => id !== solution.id) ?? []
  const related = SOLUTIONS.filter((item) => ids.includes(item.id))

  if (related.length >= limit) {
    return related.slice(0, limit)
  }

  return [
    ...related,
    ...SOLUTIONS.filter((item) => item.id !== solution.id && !related.some((relatedItem) => relatedItem.id === item.id)),
  ].slice(0, limit)
}

export const PRODUCTS: Product[] = SOLUTIONS.map((solution) => ({
  ...solution,
  description: solution.shortDescription,
  detailHref: `/giai-phap/${solution.slug}`,
  image: getSolutionImage(solution),
  icon: getSolutionIcon(solution.iconName),
  featured: [2, 4, 6, 8, 11, 12].includes(solution.id),
}))

export const ECOSYSTEM_CATEGORIES = [
  {
    id: 'operations',
    title: 'Vận hành số',
    description: 'Các giải pháp toàn diện cho quản lý vận hành doanh nghiệp',
    products: [4, 9, 10, 5],
  },
  {
    id: 'legal-documents',
    title: 'Pháp lý & chứng từ điện tử',
    description: 'Giải pháp ký số, hợp đồng và quản lý chứng từ',
    products: [6, 2, 8, 3],
  },
  {
    id: 'sales-retail',
    title: 'Bán hàng & hộ kinh doanh',
    description: 'Công cụ quản lý bán hàng và thanh toán cho hộ kinh doanh',
    products: [1, 7],
  },
  {
    id: 'communication',
    title: 'Liên lạc & truyền thông',
    description: 'Giải pháp tổng đài, chăm sóc khách hàng và truyền thanh thông minh',
    products: [11, 12],
  },
]
