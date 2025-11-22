---
slug: laravel-backend-roadmap
title: "مسارك لتصبح مطوّر باك إند بلارافيل"
description: "خريطة طريق عملية لتصبح مطوّر باك إند باستخدام Laravel: أساسيات PHP، HTTP، قواعد البيانات، بناء API، التوثيق، والنشر."
date: 2024-11-25
image: "https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg"
tags:
  - باك_إند
  - لارافيل
  - خارطة_طريق
  - api
authors:
  - name: "Hammam Zarefa"
    description: "مطوّر فل ستاك"
    avatar:
      src: "Hammam.jpg"
    to: "https://github.com/HammamZarefa"
    target: "_blank"
    ui:
      name: "text-white"
      description: "text-gray-400"

  - name: "Alaa Mhna"
    description: "Frontend Engineer"
    avatar:
      src: "https://avatars.githubusercontent.com/u/76902248?v=4"
    to: "https://github.com/alaamhna3354"
    target: "_blank"
    ui:
      name: "text-white"
      description: "text-gray-400"
---

# مسارك لتصبح مطوّر باك إند بلارافيل

تطوير الباك إند هو الجزء اللي يصير *وراء الكواليس*:

- الـ API اللي يستهلكها الفرونت
- قواعد البيانات
- حساب الصلاحيات
- الإيميلات والـ Jobs في الخلفية
- إعدادات النشر والإنتاج

لو عندك خلفية فرونت إند، تعلّم الباك إند باستخدام **Laravel** يخليك تبني منتجات كاملة من A إلى Z، مو بس واجهات.

هالخريطة تركّز على الأشياء اللي **فعلاً تحتاجها** عشان تبني APIs حقيقية لتطبيقاتك.

---

## 1. الأساسيات: البرمجة و PHP

قبل ما تدخل في Laravel، لازم تكون مرتاح مع مفاهيم البرمجة الأساسية:

- المتغيرات وأنواع البيانات
- الشروط (`if`, `switch`)
- الحلقات (`for`, `foreach`, `while`)
- الدوال (Parameters, Return)
- المصفوفات والكائنات

بعدها ركّز على أساسيات **PHP**:

- تركيب اللغة (Syntax)
- المصفوفات العادية والـ Associative Arrays
- استيراد الملفات
- الـ Namespaces و `use`
- استخدام **Composer** لإدارة الباكجات

> الهدف: تقدر تكتب سكربتات PHP بسيطة وتفهم كلاس بسيط قبل ما تفتح مشروع Laravel.

---

## 2. HTTP والطلبات وقواعد البيانات

شغل الباك إند يدور حول:

1. استقبال **طلب HTTP**
2. معالجة البيانات
3. حفظ/قراءة البيانات من قاعدة بيانات
4. إرجاع **رد (Response)** مناسب

### فهم HTTP

- أنواع الطلبات: `GET`, `POST`, `PUT`, `DELETE`
- أكواد الحالة: `200`, `201`, `400`, `401`, `404`, `500`
- الـ Headers والـ Body (خصوصًا JSON)

### فهم قواعد البيانات

- ما هي الجداول (Tables) والصفوف (Rows) والأعمدة (Columns)
- المفاتيح الأساسية (Primary Keys) والـ Foreign Keys
- أوامر SQL الأساسية:  
  `SELECT`, `INSERT`, `UPDATE`, `DELETE`

مش لازم تكون خبير قواعد بيانات، بس لازم تفهم **كيف تنخزن البيانات وكيف تسترجعها**.

---

## 3. أساسيات Laravel

الآن ننتقل لـ Laravel نفسه.

تعوّد على بنية المشروع:

- مجلد `routes/` – تعريف المسارات
- مجلد `app/Http/Controllers/` – الكنترولرز
- مجلد `app/Models/` – الموديلز (Eloquent)
- مجلد `database/migrations/` – المايغريشنز (تعريف الجداول)

مفاهيم مهمّة:

- نمط **MVC** (Model – View – Controller)
- دورة حياة الطلب (Request Lifecycle)
- ملف الإعدادات `.env`
- أوامر Artisan الأساسية

> لا تحاول تحفظ كل شيء مرة واحدة. ركّز أولاً على: Routes + Controllers + Models + Migrations.

---

## 4. بناء API باستخدام Laravel

مشاريع الفرونت الحديثة (Nuxt, React, موبايل…) غالبًا تتعامل مع **JSON API**.

تعلّم كيف:

- تعرّف المسارات في `routes/api.php`
- تنشئ كلاس كنترولر بـ `php artisan make:controller`
- ترجع JSON Response بدل Blade View

التدفق الطبيعي:

1. الفرونت يطلب `GET /api/posts`
2. الـ Route يوجّه لـ `PostController@index`
3. الكنترولر يستخدم Model `Post` لجلب البيانات
4. يرجّع JSON للفرونت إند

لازم تكون مرتاح مع دوال REST الأساسية:

- `index()` – عرض كل العناصر
- `store()` – إضافة عنصر جديد
- `show()` – عرض عنصر معيّن
- `update()` – تعديل عنصر
- `destroy()` – حذف عنصر

---

## 5. Eloquent والموديلز والعلاقات

**Eloquent ORM** هو اللي يخليك تتعامل مع قاعدة البيانات ككائنات بدل أوامر SQL مباشرة.

ركّز على:

- إنشاء الـ Migrations للجداول
- إنشاء Models (User, Post, Comment…)
- تعريف العلاقات:
  - `hasMany`
  - `belongsTo`
  - `belongsToMany`
- استخدام Query Builder للفلترة والترتيب والـ Pagination

أمثلة مشاريع تتدرّب عليها:

- مدونة بسيطة: Users + Posts + Comments
- تطبيق مهام: Users + Projects + Tasks
- متجر بسيط: Categories + Products

---

## 6. التوثيق (Auth) والأمان

أي تطبيق حقيقي يحتاج:

- تسجيل مستخدمين (Register)
- تسجيل دخول (Login)
- حماية بعض المسارات (Protected Routes)
- أدوار وصلاحيات أحيانًا (Role / Permission)

في Laravel تعلّم:

- Auth الأساسية (Breeze / Jetstream)
- حماية المسارات بالـ Middleware مثل `auth`
- استخدام **Laravel Sanctum** لتوثيق الـ SPA أو الموبايل
- التعامل الصحيح مع كلمات المرور (Hashing و Reset Password)

وكمان افهم أساسيات الأمان:

- لا تثق بأي إدخال من المستخدم (استعمل Validation)
- لا تطبع معلومات حساسة في الـ Logs
- استخدم HTTPS في بيئة الإنتاج
- خزّن الأسرار في `.env`، مو مباشرة في الكود

---

## 7. الإيميلات، الملفات، والـ Jobs

لما يكبر مشروعك، غالبًا تحتاج:

- إرسال إيميلات (تفعيل، نسيان كلمة المرور، إشعارات)
- رفع ملفات (صور، مرفقات، مستندات PDF…)
- استخدام التخزين المحلي أو S3
- تشغيل وظائف في الخلفية (Queues / Jobs) للأعمال الثقيلة

مش شرط تبدأ بكل هالمرحلة من أول يوم، بس مهم تعرف إن Laravel مجهّز لهالاحتياجات.

---

## 8. النشر (Deployment) وبيئة الإنتاج

عشان يتوفر مشروعك للمستخدمين فعليًا:

- ضبط ملف `.env` للإنتاج (قاعدة البيانات، الإيميل، الكاش…)
- تشغيل أوامر:
  - `php artisan migrate --force`
  - `php artisan config:cache`
  - `php artisan route:cache`
- اختيار استضافة مناسبة:
  - Laravel Forge / Ploi
  - أو VPS (DigitalOcean, Hetzner…) مع Nginx + PHP-FPM
- إعداد:
  - Cron Jobs للمهام المجدولة
  - Supervisor للـ Queue Workers (لو تستعمل Queues)

ابدأ باستضافة بسيطة، ولما مشروعك يكبر، تنتقل لحلول أقوى.

---

## 9. مسار مقترح بالأسابيع

كتقسيم تقريبي لو عم تدرس بشكل منتظم:

- **أسابيع 1–2**: أساسيات البرمجة + PHP
- **أسابيع 3–4**: HTTP + قواعد البيانات + SQL
- **أسابيع 5–6**: بنية Laravel + Routes + Controllers
- **أسابيع 7–8**: Eloquent + العلاقات + Migrations
- **أسابيع 9–10**: بناء JSON API + Validation + أخطاء
- **أسابيع 11–12**: التوثيق باستخدام Sanctum + حماية المسارات
- **بعدها**: ملفات، إيميل، Queues، وأول نشر حقيقي للمشروع

---

## الخلاصة

تعلّم الباك إند مع Laravel يخليك:

1. تصمّم قاعدة البيانات وتتحكّم في البيانات  
2. تبني API آمنة يتكلّم معها الفرونت إند تبعك  
3. تطلع بمنتج جاهز للاستخدام، مو بس واجهة شكلية  

لو جمعت هالمسار مع مسار الفرونت اللي عملتَه، رح تكون قريب جدًا من مستوى مطوّر **Full-stack** يقدر يمسك الميزة من الفكرة لحد الإنتاج.

