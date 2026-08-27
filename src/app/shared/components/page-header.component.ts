import { Component, Input } from '@angular/core';
@Component({ selector:'app-page-header', template:`<header class="page-header"><div class="container"><span class="eyebrow">{{eyebrow}}</span><h1>{{title}}</h1><p>{{subtitle}}</p></div></header>` }) export class PageHeaderComponent { @Input() eyebrow=''; @Input() title=''; @Input() subtitle=''; }
