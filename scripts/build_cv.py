"""Build the ATS-friendly CVs (public/cv-en.pdf, public/cv-fr.pdf, public/cv.pdf).

Single column, standard section headings, standard font, real text (no images
or tables), so applicant tracking systems parse it cleanly.
Run: python scripts/build_cv.py  (needs reportlab)
"""
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

INK = HexColor("#111111")
MUTED = HexColor("#444444")
ACCENT = HexColor("#5a22e0")

name = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=20, leading=23, textColor=INK)
title = ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=ACCENT, spaceBefore=2)
contact = ParagraphStyle("contact", fontName="Helvetica", fontSize=9, leading=12, textColor=MUTED, spaceBefore=3)
h2 = ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=10, leading=12, textColor=INK, spaceBefore=6, spaceAfter=0)
body = ParagraphStyle("body", fontName="Helvetica", fontSize=9.4, leading=12, textColor=INK, alignment=TA_LEFT)
role = ParagraphStyle("role", parent=body, fontName="Helvetica-Bold")
meta = ParagraphStyle("meta", parent=body, textColor=MUTED, alignment=2)
bullet = ParagraphStyle("bullet", parent=body, leftIndent=10, bulletIndent=1, spaceBefore=1)

def link(href, text):
    # Clickable in PDF readers; the visible text stays the plain URL/number so ATS parsers read it.
    return f'<a href="{href}" color="#5a22e0">{text}</a>'


CONTACT = " | ".join([
    "Montpellier, France",
    link("tel:+33698006329", "+33 6 98 00 63 29"),
    link("mailto:killian.ramus@gmail.com", "killian.ramus@gmail.com"),
    link("https://killianrms.com", "killianrms.com"),
    link("https://www.linkedin.com/in/killianrms", "linkedin.com/in/killianrms"),
    link("https://github.com/killianrms", "github.com/killianrms"),
])

CV = {
    "en": {
        "title": "Assistant Development &amp; Project Engineer | DevOps Engineering Student",
        "headings": ["PROFESSIONAL SUMMARY", "EXPERIENCE", "EDUCATION", "SKILLS", "PROJECTS", "LANGUAGES AND ADDITIONAL INFORMATION"],
        "summary": "Assistant development and project engineer in a work-study program at ITESOFT, and engineering student specializing in DevOps at Polytech Montpellier. In the Delivery team I develop client customizations (Java, AngularJS) and build automation tools: automated platform setup, CI/CD pipelines and internal tooling. Background in software development (BUT Computer Science) and in management and project management (IAE Montpellier).",
        "experience": [
            ("ITESOFT, Aimargues (France)", "Sep 2025 - Present", "Work-Study Assistant Development & Project Engineer, Delivery team", [
                "Automated the setup of Streamline Invoices client platforms (environment preparation, installation, configuration), making each setup fast and reproducible.",
                "Built CI/CD pipelines to build, test and package client customizations (Maven, Git).",
                "Improved the internal CreatField tool: bulk export through the API, search and multi-select, replacing a manual field-by-field process.",
                "Developed client customizations in Java and AngularJS and handled Dev, Staging (Azure) and Production deployments.",
                "Processed client support tickets, wrote escalation reports for R&amp;D, took part in daily meetings and code reviews.",
            ]),
            ("TamaBox, Draguignan (France)", "Jan 2025 - Apr 2025", "Full-Stack Developer Intern", [
                "Designed, built and hosted a statistics web application on my own (PHP, MySQL, JavaScript, Chart.js).",
                "Added marketing personas and a forecasting module; the client's occupancy rate went from 75-82% to 100%.",
            ]),
            ("BDE Informatique Montpellier", "May 2024 - Apr 2026", "Events &amp; Communication Lead (volunteer)", [
                "Organized events for computer science students and managed communication on Discord and Instagram.",
            ]),
        ],
        "education": [
            ("Polytech Montpellier", "2026 - 2029", "Engineering Degree (Master's level), DevOps, work-study"),
            ("IAE Montpellier", "2025 - 2026", "Bachelor's-level Degree in Management and Project Management (dual degree)"),
            ("IUT Montpellier-Sète", "2023 - 2026", "BUT Computer Science (Bachelor's), DACS track: deployment of secure networked applications"),
        ],
        "skills": [
            ("DevOps &amp; Automation", "CI/CD, Docker, Kubernetes, Linux, Git, Azure, Maven"),
            ("Programming Languages", "Java, Python, TypeScript, JavaScript, SQL, C, C#, PHP, HTML/CSS"),
            ("Frameworks", "Angular, AngularJS, React, Next.js, Node.js, JavaFX"),
            ("Databases", "PostgreSQL, MySQL, Oracle, MongoDB"),
            ("Methods", "Agile Scrum, code review, project management"),
        ],
        "projects": [
            ("LobbyBot", "Fortnite bot system with multi-account management, Discord bot and real-time dashboard (Node.js, Python, Docker, PostgreSQL). Community of 8,500+ members."),
            ("Referendum", "Secure voting application in Java/JavaFX with ElGamal encryption and zero-knowledge proof. Product Owner in a 4-person Scrum team."),
            ("Backup system", "Automated client-server backup with versioning, SHA-256 deduplication, AES-256-GCM encryption, SSH transfers and a Flask web interface (Python, Linux, systemd)."),
        ],
        "languages": "French: native | English: B2",
        "additional": "Driving licences A and B",
    },
    "fr": {
        "title": "Assistant ingénieur développement et projet | Élève-ingénieur DevOps",
        "headings": ["PROFIL", "EXPÉRIENCE PROFESSIONNELLE", "FORMATION", "COMPÉTENCES", "PROJETS", "LANGUES ET INFORMATIONS COMPLÉMENTAIRES"],
        "summary": "Assistant ingénieur développement et projet en alternance chez ITESOFT, élève-ingénieur spécialité DevOps à Polytech Montpellier. Dans l'équipe Delivery, je développe des personnalisations clients (Java, AngularJS) et des outils d'automatisation : initialisation automatique des plateformes, pipelines CI/CD et outillage interne. Double formation en développement logiciel (BUT Informatique) et en management et gestion de projet (IAE Montpellier).",
        "experience": [
            ("ITESOFT, Aimargues (30)", "Sept. 2025 - aujourd'hui", "Alternant Assistant ingénieur développement et projet, équipe Delivery", [
                "Automatisation de l'initialisation des plateformes clients Streamline Invoices (préparation des environnements, installation, configuration), rendue rapide et reproductible.",
                "Mise en place de pipelines CI/CD pour builder, tester et packager les personnalisations clients (Maven, Git).",
                "Amélioration de l'outil interne CreatField : export en masse via API, recherche et sélection multiple, en remplacement d'un traitement manuel champ par champ.",
                "Développement de personnalisations en Java et AngularJS, déploiements Dev, Staging (Azure) et Production.",
                "Traitement des tickets de support client, rédaction de demandes d'assistance pour la R&amp;D, daily meetings et revues de code.",
            ]),
            ("TamaBox, Draguignan (83)", "Janv. 2025 - avr. 2025", "Stagiaire développeur full-stack", [
                "Conception, développement et hébergement en autonomie d'une application web de statistiques (PHP, MySQL, JavaScript, Chart.js).",
                "Ajout de personas marketing et d'un module de prévision ; taux d'occupation du client passé de 75-82 % à 100 %.",
            ]),
            ("BDE Informatique Montpellier", "Mai 2024 - avr. 2026", "Responsable événementiel et communication (bénévolat)", [
                "Organisation d'événements pour les étudiants en informatique, communication sur Discord et Instagram.",
            ]),
        ],
        "education": [
            ("Polytech Montpellier", "2026 - 2029", "Diplôme d'ingénieur (Bac+5), spécialité DevOps, en alternance"),
            ("IAE Montpellier", "2025 - 2026", "Bac+3 Management et gestion de projet (double diplôme)"),
            ("IUT Montpellier-Sète", "2023 - 2026", "BUT Informatique (Bac+3), parcours DACS : déploiement d'applications communicantes et sécurisées"),
        ],
        "skills": [
            ("DevOps et automatisation", "CI/CD, Docker, Kubernetes, Linux, Git, Azure, Maven"),
            ("Langages", "Java, Python, TypeScript, JavaScript, SQL, C, C#, PHP, HTML/CSS"),
            ("Frameworks", "Angular, AngularJS, React, Next.js, Node.js, JavaFX"),
            ("Bases de données", "PostgreSQL, MySQL, Oracle, MongoDB"),
            ("Méthodes", "Agile Scrum, revue de code, gestion de projet"),
        ],
        "projects": [
            ("LobbyBot", "Système de bots Fortnite avec gestion multi-comptes, bot Discord et dashboard temps réel (Node.js, Python, Docker, PostgreSQL). Communauté de plus de 8 500 membres."),
            ("Referendum", "Application de vote sécurisée en Java/JavaFX avec chiffrement ElGamal et preuve à divulgation nulle. Product Owner d'une équipe Scrum de 4 personnes."),
            ("Système de sauvegarde", "Sauvegarde automatique client-serveur avec gestion de versions, déduplication SHA-256, chiffrement AES-256-GCM, transferts SSH et interface web Flask (Python, Linux, systemd)."),
        ],
        "languages": "Français : langue maternelle | Anglais : B2",
        "additional": "Permis A et B",
    },
}


def section(story, heading):
    story.append(Paragraph(heading, h2))
    story.append(HRFlowable(width="100%", thickness=0.6, color=INK, spaceBefore=1, spaceAfter=3))


def two_col(left, right):
    t = Table([[left, right]], colWidths=["68%", "32%"])
    t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0)]))
    return t


def build(lang, out):
    c = CV[lang]
    h = c["headings"]
    doc = SimpleDocTemplate(str(out), pagesize=A4, leftMargin=16 * mm, rightMargin=16 * mm, topMargin=11 * mm, bottomMargin=10 * mm,
                            title=f"Killian Ramus - CV ({lang.upper()})", author="Killian Ramus", subject=c["title"],
                            keywords="Development engineer, project engineer, DevOps, CI/CD, automation, Java, Angular, Docker, Polytech Montpellier, ITESOFT")
    s = [Paragraph("KILLIAN RAMUS", name), Paragraph(c["title"], title), Paragraph(CONTACT, contact)]

    section(s, h[0])
    s.append(Paragraph(c["summary"], body))

    section(s, h[1])
    for org, dates, job, bullets in c["experience"]:
        block = [two_col(Paragraph(job, role), Paragraph(dates, meta)), Paragraph(org, body)]
        block += [Paragraph(b, bullet, bulletText="•") for b in bullets]
        block.append(Spacer(1, 2.5))
        s.append(KeepTogether(block))

    section(s, h[2])
    for school, dates, degree in c["education"]:
        s.append(two_col(Paragraph(f"<b>{degree}</b><br/>{school}", body), Paragraph(dates, meta)))
        s.append(Spacer(1, 1.5))

    section(s, h[3])
    for label, items in c["skills"]:
        s.append(Paragraph(f"<b>{label}:</b> {items}" if lang == "en" else f"<b>{label} :</b> {items}", body))

    section(s, h[4])
    for pname, desc in c["projects"]:
        s.append(Paragraph(f"<b>{pname}</b>: {desc}" if lang == "en" else f"<b>{pname}</b> : {desc}", bullet, bulletText="•"))

    section(s, h[5])
    s.append(Paragraph(f'{c["languages"]} | {c["additional"]}', body))
    doc.build(s)


if __name__ == "__main__":
    public = Path(__file__).resolve().parent.parent / "public"
    build("en", public / "cv-en.pdf")
    build("fr", public / "cv-fr.pdf")
    build("en", public / "cv.pdf")  # keeps old /cv.pdf links working
