# Segurança

Este site é estático e não coleta dados sensíveis diretamente. Quando inscrições, ranking ao vivo ou formulários forem integrados, use um backend confiável e valide todos os dados no servidor.

## Recomendações de headers para hospedagem com suporte

GitHub Pages não permite configurar todos estes headers por repositório. Se o site for publicado via Cloudflare Pages, Netlify, Vercel ou outro host com headers customizados, use uma política equivalente:

```txt
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data: https:; frame-src https://www.youtube-nocookie.com https://open.spotify.com https://www.google.com; connect-src 'self'; base-uri 'self'; form-action 'self' mailto:; object-src 'none'; frame-ancestors 'self'; upgrade-insecure-requests
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## Cuidados para futuras integrações

- Não inserir dados vindos de planilhas, JSON externo ou painel administrativo com `innerHTML`.
- Não publicar tokens, chaves privadas ou URLs de administração no repositório.
- Em inscrições reais, tratar LGPD com cuidado extra porque o evento envolve menores de idade.
- Em formulários, usar proteção anti-spam, consentimento claro, HTTPS e validação no servidor.
