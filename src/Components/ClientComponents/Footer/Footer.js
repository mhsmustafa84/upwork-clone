import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>
        <footer>
    <div class="container">
        <div class="row footer-menu-cn">
            <div class="col-md-3 col-sm-12">
                <ul class="list-unstyled">
                    <li><a href="">About Us</a></li>
                    <li><a href="">Feedback</a></li>
                    <li><a href="">Community</a></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-12">
                <ul class="list-unstyled">
                    <li><a href="">Trust, Safety & Security</a></li>
                    <li><a href="">Help & Support</a></li>
                    <li><a href="">Upwork Foundation</a></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-12">
                <ul class="list-unstyled">
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Accessibility</a></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-12">
                <ul class="list-unstyled">
                    <li><a href="">Desktop App</a></li>
                    <li><a href="">Cookie Policy</a></li>
                    <li><a href="">Enterprise Solutions</a></li>
                </ul>
            </div>
        </div>
        <div class="row social-footer-cn pt-3">
            <div class="col-md-6 col-sm-12">
                <div class="d-flex">
                    <span class="text-light">Follow us</span>
                    <ul class="list-unstyled d-flex ms-3">
                        <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href=""><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href=""><i class="fab fa-twitter"></i></a></li>
                        <li><a href=""><i class="fab fa-youtube"></i></a></li>
                        <li><a href=""><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="d-flex justify-content-end">
                    <span class="text-light">Mobile app</span>
                    <ul class="list-unstyled d-flex ms-3">
                        <li><a href=""><i class="fab fa-apple"></i></a></li>
                        <li><a href=""><i class="fab fa-google-play"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <p class="text-light text-center mt-4">© 2015 - 2021 Upwork® Global Inc.</p>
        </div>
    </div>
</footer>
        </>
    )
}
