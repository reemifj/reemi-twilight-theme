# ثيم مجوهرات ريمي — Salla Twilight Theme
## REEMI FOR JEWELLERY

ثيم مخصص لمنصة سلة (Salla) مبني بمحرك Twilight، مصمم بأسلوب فاخر مستوحى من أشهر دور المجوهرات العالمية.

---

## المتطلبات

قبل البدء، تأكد من توفر التالي:

1. **حساب سلة تاجر** — [salla.sa](https://salla.sa)
2. **حساب شريك سلة** — [salla.partners](https://salla.partners)
3. **حساب GitHub** — لربط ملفات الثيم
4. **Node.js** (v16+) و **npm** أو **yarn**
5. **Salla CLI** — أداة سطر أوامر سلة

---

## خطوات التثبيت والتشغيل

### الخطوة 1: تثبيت Salla CLI

```bash
npm install -g @salla.sa/cli
salla login
```

### الخطوة 2: إنشاء الثيم على بوابة الشركاء

1. ادخل على [salla.partners](https://salla.partners)
2. اربط حسابك بـ GitHub
3. اضغط **"Create Theme"** أو **"Import Theme"**
4. إذا اخترت Import — حدد هذا المستودع من GitHub

### الخطوة 3: استنساخ الثيم محلياً

```bash
git clone https://github.com/YOUR_USERNAME/reemi-jewellery-theme.git
cd reemi-jewellery-theme
npm install
```

### الخطوة 4: معاينة الثيم

```bash
salla theme preview
```

هذا الأمر يفتح متجرك التجريبي مع الثيم المطبق عليه.

### الخطوة 5: التطوير المباشر

```bash
npm run dev
```

هذا يشغل Webpack في وضع المراقبة — أي تعديل على الملفات ينعكس مباشرة في المعاينة.

### الخطوة 6: البناء للإنتاج

```bash
npm run build
```

### الخطوة 7: رفع ونشر الثيم

```bash
git add .
git commit -m "Reemi theme ready"
git push origin main
```

ثم من بوابة الشركاء → **My Themes** → اختر الثيم → **Publish**

يمكنك اختيار:
- **Public**: متاح لجميع المتاجر
- **Private**: خاص بمتجرك فقط (عبر رابط تثبيت)
- **Beta**: للاختبار

---

## هيكل الملفات

```
reemi-jewellery-theme/
├── twilight.json              ← إعدادات الثيم
├── package.json               ← التبعيات
├── webpack.config.js          ← إعداد Webpack
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   │   └── app.css        ← التنسيقات الرئيسية
│   │   ├── js/
│   │   │   └── app.js         ← السكربت الرئيسي
│   │   └── images/            ← الصور والشعار
│   ├── locales/
│   │   ├── ar.json            ← الترجمة العربية
│   │   └── en.json            ← الترجمة الإنجليزية
│   └── views/
│       ├── layouts/
│       │   └── master.twig    ← القالب الرئيسي
│       ├── pages/
│       │   ├── index.twig     ← الصفحة الرئيسية
│       │   ├── cart.twig      ← سلة المشتريات
│       │   ├── thank-you.twig ← صفحة الشكر
│       │   ├── page-single.twig ← الصفحات الثابتة
│       │   ├── loyalty.twig   ← نقاط الولاء
│       │   ├── product/
│       │   │   ├── index.twig ← قائمة المنتجات
│       │   │   └── single.twig← صفحة المنتج
│       │   ├── customer/
│       │   │   ├── profile.twig
│       │   │   ├── wishlist.twig
│       │   │   └── notifications.twig
│       │   ├── orders/
│       │   │   ├── index.twig
│       │   │   └── single.twig
│       │   ├── blog/
│       │   │   ├── index.twig
│       │   │   └── single.twig
│       │   └── brands/
│       │       ├── index.twig
│       │       └── single.twig
│       └── components/
│           ├── header/
│           │   └── header.twig
│           ├── footer/
│           │   └── footer.twig
│           ├── home/
│           │   ├── hero-slider.twig
│           │   ├── categories-grid.twig
│           │   ├── story-section.twig
│           │   ├── newsletter.twig
│           │   └── whatsapp-float.twig
│           └── product/
│               ├── card.twig
│               └── comments.twig
```

---

## تخصيص الثيم

### الألوان
عدّل ملف `src/assets/styles/app.css` — القسم `:root`:
```css
--gold: #B8860B;        /* اللون الذهبي الرئيسي */
--gold-light: #D4A843;  /* ذهبي فاتح */
--black: #0A0A0A;       /* الأسود */
```

### الإعدادات
عدّل `twilight.json` → `settings`:
- `hero_title_ar`: عنوان الهيرو
- `whatsapp_number`: رقم الواتساب
- `instagram_url`: رابط انستقرام
- `show_story_section`: إظهار/إخفاء قسم القصة

### الشعار
ارفع الشعار من لوحة تحكم سلة → إعدادات المتجر → الشعار.
الثيم يستخدم `store.logo` تلقائياً.

---

## ميزات الثيم

- ✅ تصميم فاخر مستوحى من Harry Winston
- ✅ دعم كامل للعربية (RTL) والإنجليزية
- ✅ هيرو سلايدر متحرك
- ✅ شبكة تصنيفات بصرية
- ✅ بطاقات منتجات مع إضافة سريعة للسلة
- ✅ صفحة منتج كاملة مع معرض صور + مواصفات + تقييمات
- ✅ فلترة وترتيب المنتجات
- ✅ قسم قصة البراند
- ✅ زر واتساب عائم
- ✅ نشرة بريدية
- ✅ صفحات العميل (حساب، طلبات، مفضلة، إشعارات)
- ✅ مدونة
- ✅ نقاط ولاء
- ✅ متجاوب بالكامل (موبايل + تابلت + ديسكتوب)
- ✅ أنيميشن Reveal on Scroll
- ✅ دعم كامل لبوابات الدفع (مدى، فيزا، Apple Pay، تابي)
- ✅ متوافق مع Salla Web Components

---

## الدعم

للمساعدة في التطوير أو التخصيص:
- 📖 [توثيق Twilight](https://docs.salla.dev)
- 💬 [مجتمع شركاء سلة - تليقرام](https://t.me/sallapartners)
- 📧 info@reemijewellery.com

---

© 2024 مجوهرات ريمي | REEMI FOR JEWELLERY
