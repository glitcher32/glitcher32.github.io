var r_text = new Array (); 
r_text[0] = "Use uBlock Origin to block ads/trackers when browsing the web."; 
r_text[1] = "Don't use Windows, try Linux instead."; 
r_text[2] = "Avoid CloudFlare along with websites that rely on them."; 
r_text[3] = "Use the Tor Browser as much as possible."; 
r_text[4] = "Just because you use a VPN, it doesn't make you safe. Use a trusted one."; 
r_text[5] = "Use privacy friendly alternatives. Check ThinkPrivacy.io";
r_text[6] = "Use Schiffer.Tech to protect your screen, keyboard, and webcam from capture. Windows/Android.";
r_text[7] = "If you need a good privacy guide, check out PrivacyTools.io";
r_text[8] = "Never trust a company like Google (YouTube) or Facebook (WhatsApp).";
r_text[9] = "Self hosting is a better option if possible. Never trust your files/info on someone else's server.";
r_text[10] = "Protect your Android device's camera from unwanted capture. Check out glitcher32.com/camerablocker";
var i = Math.floor(r_text.length * Math.random()); 
document.write("<b>[Privacy Tip]</b> " + 
r_text[i]  + "</FONT></center><br />"); 
