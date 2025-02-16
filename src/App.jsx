import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_USER_REQUEST } from './store/actions/userActions';
import { FETCH_USER_POSTS_REQUEST } from './store/actions/postActions';
import './App.css';

function App() {
  const projectDescription = [
    "Bu proje, Redux-Saga'nın asenkron veri yönetimi yeteneklerini gösteren bir örnektir. Uygulama, JSONPlaceholder API'sini kullanarak kullanıcı bilgilerini ve kullanıcılara ait gönderileri çeker.",
    "Redux-Saga middleware'i sayesinde, karmaşık asenkron işlemler (API çağrıları) düzenli ve yönetilebilir bir şekilde gerçekleştirilir. Ayrıca, yükleme durumları ve hata yönetimi de etkin bir şekilde ele alınır.",
    "Projede kullanılan temel Redux-Saga kavramları:",
    "• Actions: Uygulamada gerçekleşen olayları temsil eden nesneler. Örneğin: FETCH_USER_REQUEST, FETCH_USER_SUCCESS",
    "• Reducers: State'i güncelleyen saf fonksiyonlar. Action'lara göre state'i değiştirir.",
    "• Sagas: Asenkron işlemleri yöneten generator fonksiyonları. API çağrıları burada yapılır.",
    "• Effects: take, put, call gibi saga helper fonksiyonları. Asenkron akışı yönetir.",
    "• Middleware: Redux store ile etkileşime giren ara katman. Saga'lar burada çalışır."
  ].join('\n\n');

  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.users);
  const { posts, loading: postsLoading } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch({ type: FETCH_USER_REQUEST });
  }, [dispatch]);

  useEffect(() => {
    if (users.length > 0) {
      users.forEach(user => {
        dispatch({ type: FETCH_USER_POSTS_REQUEST, payload: user.id });
      });
    }
  }, [users, dispatch]);

  if (loading) {
    return <div className="loading">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="error">Hata: {error}</div>;
  }

  return (
    <div className="App">
      <div className="project-description">
        {projectDescription.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <h1>Kullanıcı Listesi</h1>
      <div className="card">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Telefon:</strong> {user.phone}</p>
            <div className="user-posts">
              <h4>Kullanıcı Gönderileri</h4>
              {postsLoading ? (
                <p className="loading-posts">Gönderiler yükleniyor...</p>
              ) : (
                <ul>
                  {posts
                    .filter(post => post.userId === user.id)
                    .length === 0 ? (
                      <p className="no-posts">Bu kullanıcının henüz gönderisi bulunmamaktadır.</p>
                    ) : (
                      posts
                        .filter(post => post.userId === user.id)
                        .map(post => (
                          <li key={post.id}>
                            <div className="post-title">{post.title}</div>
                            <div className="post-body">{post.body}</div>
                          </li>
                        ))
                    )}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
