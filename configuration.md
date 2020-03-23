# configuration

## Sending in log data

{% tabs %}
{% tab title="Simple" %}
```javascript
tbd...
```
{% endtab %}

{% tab title="Advanced" %}
```javascript
// draft!!!
const adr = new AdrHttpFetch('http://graylog.example.org:12202/gelf');
const gjs = new GelfJs(new CfgBuilder(adr).build());

adr.send(gjs.message('welcome', 1, {tom: 'cat', spike: 'bulldog'})); // Promise
```
{% endtab %}

{% tab title="Nightmare" %}
```
tbd...
```
{% endtab %}
{% endtabs %}



