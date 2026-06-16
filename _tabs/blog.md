---
title: 文章
icon: fas fa-pen
order: 3
---

## 最新文章
{% raw %}
<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span>{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endfor %}
</ul>
{% endraw %}
