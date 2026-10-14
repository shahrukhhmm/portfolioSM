import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume(output_path):
    # Page size: Letter (8.5 x 11 inches) = (612 x 792 pt)
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=26,
        bottomMargin=26
    )

    styles = getSampleStyleSheet()

    # Executive Color Palette: Deep Slate, Sky Blue Accent, Charcoal Body
    PRIMARY = colors.HexColor("#0f172a")     # Slate 900
    ACCENT = colors.HexColor("#0284c7")      # Sky 600
    TEXT_MAIN = colors.HexColor("#1e293b")   # Slate 800
    TEXT_MUTED = colors.HexColor("#475569")  # Slate 600
    LINE_COLOR = colors.HexColor("#cbd5e1")  # Slate 300

    name_style = ParagraphStyle(
        'DocName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=21,
        leading=23,
        textColor=PRIMARY,
        alignment=TA_CENTER
    )

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=12,
        textColor=ACCENT,
        alignment=TA_CENTER
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.1,
        leading=11.2,
        textColor=TEXT_MUTED,
        alignment=TA_CENTER
    )

    section_header_style = ParagraphStyle(
        'SectionHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.8,
        leading=12,
        textColor=PRIMARY,
        spaceAfter=2
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11.2,
        textColor=TEXT_MAIN
    )

    role_style = ParagraphStyle(
        'RoleTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.8,
        leading=11.2,
        textColor=TEXT_MAIN
    )

    date_style = ParagraphStyle(
        'DateStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11.2,
        textColor=TEXT_MUTED,
        alignment=TA_RIGHT
    )

    bullet_style = ParagraphStyle(
        'BulletItem',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.0,
        leading=10.6,
        textColor=TEXT_MAIN,
        leftIndent=10
    )

    skill_label_style = ParagraphStyle(
        'SkillLabel',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.1,
        leading=10.8,
        textColor=PRIMARY
    )

    skill_val_style = ParagraphStyle(
        'SkillVal',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.0,
        leading=10.8,
        textColor=TEXT_MAIN
    )

    story = []

    # 1. Header Section
    story.append(Paragraph("SHAHRUKH MALIK", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("LEAD FULL-STACK DEVELOPER &middot; TECHNICAL LEAD (CTO-LEVEL SCOPE)", title_style))
    story.append(Spacer(1, 4))

    contacts_line1 = (
        '<font color="#0284c7"><b>Email:</b></font> <a href="mailto:shahrukh862001@gmail.com"><font color="#1e293b">shahrukh862001@gmail.com</font></a> &nbsp;&bull;&nbsp; '
        '<font color="#0284c7"><b>Phone/WhatsApp:</b></font> <a href="https://wa.me/923445566158"><font color="#1e293b">+92 344 5566158</font></a> &nbsp;&bull;&nbsp; '
        '<font color="#0284c7"><b>Location:</b></font> Pakistan (Global Remote Available)'
    )
    contacts_line2 = (
        '<font color="#0284c7"><b>Portfolio:</b></font> <a href="https://shahrukhmm-portfolio.netlify.app"><font color="#0284c7"><b>shahrukhmm-portfolio.netlify.app</b></font></a> &nbsp;&bull;&nbsp; '
        '<font color="#0284c7"><b>LinkedIn:</b></font> <a href="https://linkedin.com/in/shahrukh-mehmood-2921bb22a"><font color="#0284c7">linkedin.com/in/shahrukh-mehmood</font></a> &nbsp;&bull;&nbsp; '
        '<font color="#0284c7"><b>GitHub:</b></font> <a href="https://github.com/shahrukhhmm"><font color="#0284c7">github.com/shahrukhhmm</font></a>'
    )
    story.append(Paragraph(contacts_line1, contact_style))
    story.append(Paragraph(contacts_line2, contact_style))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1, color=LINE_COLOR, spaceBefore=0, spaceAfter=5))

    # 2. Executive Professional Summary
    story.append(Paragraph("EXECUTIVE SUMMARY", section_header_style))
    summary_text = (
        "<b>Full-Stack Developer & Technical Lead</b> with <b>5+ years</b> of hands-on expertise engineering scalable production systems across "
        "<b>Laravel/PHP</b>, <b>Node.js</b>, <b>React</b>, <b>MERN</b>, <b>AWS Cloud</b>, and <b>AI/RAG architectures</b>. Currently directing full-stack operations, "
        "leading cross-functional engineering squads, and managing a multi-domain fleet of <b>200+ Laravel production websites</b>. Proven track record delivering "
        "high-concurrency SaaS suites, real-time IoT telematics, multi-provider GDS travel portals, automated fintech printing, and double-entry cargo ERPs."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_COLOR, spaceBefore=0, spaceAfter=4))

    # 3. Core Competencies & Technical Skills
    story.append(Paragraph("CORE TECHNICAL SKILLS", section_header_style))
    skills_data = [
        [
            Paragraph("Backend & Architecture:", skill_label_style),
            Paragraph("Laravel, PHP (5+ yrs), Node.js, Express.js, RESTful APIs, WebSockets (Socket.io), C#, Python, Background Queue Workers, Microservices", skill_val_style)
        ],
        [
            Paragraph("Frontend & Mobile:", skill_label_style),
            Paragraph("React.js, Next.js, Livewire, Alpine.js, Tailwind CSS, Bootstrap, JavaScript (ES6+), HTML5, Flutter (Cross-Platform Mobile)", skill_val_style)
        ],
        [
            Paragraph("Databases & Cloud:", skill_label_style),
            Paragraph("MySQL, MongoDB, Redis, Apache Kafka, AWS (EC2, S3, Lambda, CloudFront, RDS), Cloudflare (WAF/CDN/DNS), Linux VPS, cPanel, Docker", skill_val_style)
        ],
        [
            Paragraph("AI & Automation:", skill_label_style),
            Paragraph("LLM Integrations (OpenAI/Claude), RAG Pipelines, Vector DBs, n8n Workflow Automations, Third-Party GDS/Payment Gateways (QPay, N-Genius)", skill_val_style)
        ]
    ]

    skills_table = Table(skills_data, colWidths=[120, 428])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_COLOR, spaceBefore=0, spaceAfter=4))

    # 4. Professional Work Experience
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_header_style))

    # Job 1: WayWeGaming
    j1_row = [
        Paragraph("<b>Full-Stack Developer &middot; Team Lead &middot; Technical Lead</b>", role_style),
        Paragraph("<b>WayWeGaming</b> &nbsp;|&nbsp; Apr 2026 – Present", date_style)
    ]
    t1 = Table([j1_row], colWidths=[318, 230])
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1)
    ]))
    story.append(t1)
    story.append(Paragraph("&bull; Lead engineering operations across Laravel, MERN, and AI systems with CTO-level architectural ownership.", bullet_style))
    story.append(Paragraph("&bull; Orchestrate a multi-domain fleet of <b>200+ Laravel production websites</b>: automated deployments, Cloudflare caching, DNS routing, and technical SEO.", bullet_style))
    story.append(Paragraph("&bull; Architected internal SEO Content Placement Dashboard and complete enterprise HRM platform for operational workforce management.", bullet_style))
    story.append(Paragraph("&bull; Built production AI applications, enterprise RAG knowledge-retrieval pipelines, and automated n8n business orchestration workflows.", bullet_style))
    story.append(Paragraph("&bull; Mentor and guide engineering, SEO, and content writing teams; conduct sprint planning, code reviews, and live production security checks.", bullet_style))
    story.append(Spacer(1, 3))

    # Job 2: Sigma Digital Solutions
    j2_row = [
        Paragraph("<b>Backend Developer &middot; Team Lead</b>", role_style),
        Paragraph("<b>Sigma Digital Solutions</b> &nbsp;|&nbsp; Apr 2025 – Apr 2026", date_style)
    ]
    t2 = Table([j2_row], colWidths=[318, 230])
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1)
    ]))
    story.append(t2)
    story.append(Paragraph("&bull; Architected high-impact commercial web systems: <b>Al Mulla Travels</b> (Travelport/TBO GDS flight & hotel booking), <b>TechnoCheck</b> (fintech cheque printing & school ERP), and <b>Meryal Waterpark</b> (Next.js/Flutter ticketing platform).", bullet_style))
    story.append(Paragraph("&bull; Led developer squad through task estimation, database schema design, REST API specifications, and rigorous PR reviews.", bullet_style))
    story.append(Paragraph("&bull; Configured Linux VPS hosting, cPanel environments, automated database backups, and SSL/WAF infrastructure.", bullet_style))
    story.append(Spacer(1, 3))

    # Job 3: Zimo Group
    j3_row = [
        Paragraph("<b>Senior Backend Developer</b>", role_style),
        Paragraph("<b>Zimo Group (UK)</b> &nbsp;|&nbsp; Jul 2022 – Feb 2024", date_style)
    ]
    t3 = Table([j3_row], colWidths=[318, 230])
    t3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1)
    ]))
    story.append(t3)
    story.append(Paragraph("&bull; <b>ZiTransfer:</b> Developed WeTransfer-style cloud transfer platform with direct AWS S3 presigned multipart chunked uploads, Lambda workers, and CloudFront edge delivery.", bullet_style))
    story.append(Paragraph("&bull; <b>ZimoMeet:</b> Engineered low-latency enterprise video conferencing suite integrating Laravel API, Next.js, and Jitsi Meet WebRTC on AWS EC2.", bullet_style))
    story.append(Paragraph("&bull; <b>ZimoPro:</b> Built real-time luxury auction bidding engine with anti-sniping countdown algorithms, Redis queues, and transactional locks.", bullet_style))
    story.append(Spacer(1, 3))

    # Job 4: DevThrone & Tech Falcon
    j4_row = [
        Paragraph("<b>Full-Stack Developer &middot; Earlier Roles</b>", role_style),
        Paragraph("<b>DevThrone & Tech Falcon</b> &nbsp;|&nbsp; Nov 2021 – Apr 2025", date_style)
    ]
    t4 = Table([j4_row], colWidths=[318, 230])
    t4.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1)
    ]))
    story.append(t4)
    story.append(Paragraph("&bull; Built full-stack client applications including Zaman Cargo (double-entry freight ledger ERP), SimpleFixx (handyman marketplace), BoxTech (IoT tracking), and LeadExchange (dual-wallet lead trading).", bullet_style))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_COLOR, spaceBefore=0, spaceAfter=4))

    # 5. Key Production Systems
    story.append(Paragraph("SELECTED PRODUCTION SYSTEMS HIGHLIGHTS", section_header_style))
    proj_text = (
        "<b>&bull; Al Mulla Travels:</b> Travelport & TBO GDS API integration, N-Genius payment gateway, vendor portal, and Flutter mobile app.<br/>"
        "<b>&bull; BoxTech:</b> IoT telematics platform streaming live GPS and device metrics via Apache Kafka, Flespi API, C#, and OpenStreetMap.<br/>"
        "<b>&bull; ZiTransfer:</b> Enterprise file transfer platform handling gigabyte files via direct S3 chunked uploads, Lambda, and CloudFront.<br/>"
        "<b>&bull; Zaman Cargo ERP:</b> Complete double-entry cargo accounting engine with client ledgers, invoices, vouchers, and payroll."
    )
    story.append(Paragraph(proj_text, body_style))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_COLOR, spaceBefore=0, spaceAfter=4))

    # 6. Education
    story.append(Paragraph("EDUCATION", section_header_style))
    edu_data = [
        [
            Paragraph("<b>Bachelor of Science in Computer Science (BSCS)</b> &middot; Allama Iqbal Open University", body_style),
            Paragraph("Sep 2019 – Jun 2023", date_style)
        ],
        [
            Paragraph("<b>Intermediate in Computer Science (ICS)</b> &middot; Rawalpindi College of Commerce", body_style),
            Paragraph("Sep 2017 – Jun 2019", date_style)
        ]
    ]
    edu_table = Table(edu_data, colWidths=[380, 168])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1)
    ]))
    story.append(edu_table)

    doc.build(story)
    print(f"Resume generated successfully at {output_path}")

if __name__ == "__main__":
    out_file = r"e:\portfolioSM\public\Shahrukh_Malik_Resume.pdf"
    create_resume(out_file)
