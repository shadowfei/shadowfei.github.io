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
    margin-bottom: 1.4rem;
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
    margin: 0.25rem 0 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--text-muted-color, #8a8a8a);
  }
</style>

{% assign by_year = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
{% for year in by_year %}
<h2 class="op-year">{{ year.name }}</h2>
{% for post in year.items %}
<div class="op-item">
  <div class="op-head">
    <a href="{{ post.url | relative_url }}" class="op-title">{{ post.title }}</a>
    <span class="op-date">{{ post.date | date: "%Y-%m-%d" }}</span>
  </div>
  <p class="op-summary">{{ post.description | default: post.excerpt | strip_html | strip_newlines | truncate: 120 }}</p>
</div>
{% endfor %}
{% endfor %}
