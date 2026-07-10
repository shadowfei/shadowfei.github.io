---
title: 观点思考 / Opinions & Thinking
icon: fas fa-lightbulb
order: 0
---

<style>
  .op-year {
    font-size: 1.35rem;
    margin: 2rem 0 1rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid var(--main-border-color, rgba(128, 128, 128, 0.2));
  }
  .op-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    margin-bottom: 1.6rem;
  }
  .op-thumb {
    flex: 0 0 188px;
    height: 80px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--card-bg, rgba(128, 128, 128, 0.08));
    border: 1px solid var(--main-border-color, rgba(128, 128, 128, 0.15));
  }
  .op-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }
  .op-thumb .op-ph-icon {
    font-size: 1.6rem;
    color: var(--text-muted-color, #8a8a8a);
    opacity: 0.55;
  }
  .op-body {
    flex: 1;
    min-width: 0;
  }
  .op-head {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .op-title {
    font-size: 1.08rem;
    font-weight: 600;
  }
  .op-date {
    font-size: 0.82rem;
    color: var(--text-muted-color, #8a8a8a);
    white-space: nowrap;
  }
  .op-summary {
    margin: 0.25rem 0 0.45rem;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--text-muted-color, #8a8a8a);
  }
  .op-cats {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
  }
  .op-cat {
    font-size: 0.75rem;
    line-height: 1;
    padding: 0.3rem 0.55rem;
    border-radius: 99px;
    border: 1px solid var(--main-border-color, rgba(128, 128, 128, 0.25));
    color: var(--text-muted-color, #8a8a8a);
    background: transparent;
    text-decoration: none;
  }
  .op-cat:hover {
    color: var(--link-color, #2a408e);
    border-color: var(--link-color, #2a408e);
  }
  @media (max-width: 576px) {
    .op-item { gap: 0.75rem; }
    .op-thumb { flex: 0 0 122px; height: 52px; }
    .op-title { font-size: 1rem; }
  }
</style>

{% assign by_year = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
{% for year in by_year %}
<h2 class="op-year">{{ year.name }}</h2>
{% for post in year.items %}
<div class="op-item">
  <a href="{{ post.url | relative_url }}" class="op-thumb" aria-hidden="true" tabindex="-1">
    {%- if post.image -%}
      {%- assign thumb = post.image.path | default: post.image -%}
      {%- if post.media_subpath -%}
        {%- assign thumb = post.media_subpath | append: '/' | append: thumb -%}
      {%- endif -%}
      <img src="{{ thumb | relative_url }}" alt="文章缩略图" loading="lazy">
    {%- else -%}
      <i class="fas fa-lightbulb op-ph-icon"></i>
    {%- endif -%}
  </a>
  <div class="op-body">
    <div class="op-head">
      <a href="{{ post.url | relative_url }}" class="op-title">{{ post.title }}</a>
      <span class="op-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    </div>
    <p class="op-summary">{{ post.description | default: post.excerpt | strip_html | strip_newlines | truncate: 120 }}</p>
    <div class="op-cats">
      {%- for cat in post.categories -%}
      {%- assign cat_slug = cat | slugify | url_encode -%}
      <a class="op-cat" href="{{ '/categories/' | append: cat_slug | append: '/' | relative_url }}">{{ cat }}</a>
      {%- endfor -%}
    </div>
  </div>
</div>
{% endfor %}
{% endfor %}
