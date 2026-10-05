// Запуск на сервере: pm2 start ecosystem.config.js && pm2 save
// next запускается напрямую, а не через `npm run start`: pm2 меряет память своего
// процесса, и через npm он видел бы только обёртку npm, а не сам next-server.
module.exports = {
  apps: [{
    name: 'front',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3000',
    // Сервер с 1 ГБ памяти: лучше аккуратно перезапуститься заранее,
    // чем дождаться OOM-killer и зависания всей машины.
    max_memory_restart: '450M',
    env: { NODE_ENV: 'production' }
  }]
};
