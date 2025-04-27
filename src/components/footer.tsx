import Logo from '../assets/images/Logo.svg';

export function Footer() {
  return (
    <footer className="border-t border-white/20 bg-black py-12 text-white/60">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <img className="h-12 w-12 mb-4" alt="לוגו" src={Logo} />
            <p className="text-sm mb-4">
              הכשרה מקצועית לאיקומרס עם ליווי צמוד ותמיכה 24/7. הצלחה או החזר כספי מלא!
            </p>
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} כל הזכויות שמורות
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white text-sm font-medium mb-4">ניווט</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-sm hover:text-purple-400 transition">בית</a></li>
              <li><a href="#about" className="text-sm hover:text-purple-400 transition">אודות</a></li>
              <li><a href="#features" className="text-sm hover:text-purple-400 transition">תכונות</a></li>
              <li><a href="#testimonials" className="text-sm hover:text-purple-400 transition">סיפורי הצלחה</a></li>
              <li><a href="#faq" className="text-sm hover:text-purple-400 transition">שאלות נפוצות</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white text-sm font-medium mb-4">מידע נוסף</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-purple-400 transition">תנאי שימוש</a></li>
              <li><a href="#" className="text-sm hover:text-purple-400 transition">מדיניות פרטיות</a></li>
              <li><a href="#" className="text-sm hover:text-purple-400 transition">החזרים וביטולים</a></li>
              <li><a href="#" className="text-sm hover:text-purple-400 transition">צור קשר</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white text-sm font-medium mb-4">הצטרפו אלינו</h3>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors mb-4">
              הרשם עכשיו
            </button>
            <p className="text-xs text-white/50">
              מתחייבים להצלחה שלכם או החזר כספי מלא!
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-xs text-white/40">
          <p>האתר אינו חלק מפייסבוק או מכל גוף אחר השייך למטא. כל הזכויות על התוכן שמורות לחברה.</p>
        </div>
      </div>
    </footer>
  )
}