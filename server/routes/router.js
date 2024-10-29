import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/login.html'));
});
router.post('/login', (req, res) => {
    res.redirect('/api/todo-list');
});
router.get('/todo-list', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/todo-list.html'));
});
router.post('/todo-list', (req, res) => {
    res.redirect('/api/edit-todo');
});
router.get('/edit-todo', (req, res) => { 
    res.sendFile(path.join(__dirname, '../../frontend/edit-todo.html'));
});
router.post('/edit-todo', (req, res) => {
    res.redirect('/api/404');
});
router.get('/404', (req, res)   => {  
    res.sendFile(path.join(__dirname, '../../frontend/404.html'));
 });

export default router;