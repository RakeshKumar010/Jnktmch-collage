import admiImg1 from '../../assets/Yoga11.jpg'
import admiImg2 from '../../assets/Yoga12.jpg'
import admiImg3 from '../../assets/Yoga13.jpg'
import admiImg4 from '../../assets/f02bec0b-9ff8-4590-8573-7ec8b70e98aa.jpg'
import admiImg5 from '../../assets/15a25bfe-99c8-481c-9c58-01ae79dcb06d.jpg'
import admiImg6 from '../../assets/eefdcaf5-ca0b-44cc-9907-4310bbe9771c.jpg'
import admiImg7 from '../../assets/bbb0261e-b066-4894-b729-252482229bf2.jpg'
import admiImg8 from '../../assets/9ee72851-417c-4b12-813f-46df695b291f.jpg'
import admiImg10 from '../../assets/f00e49cc-1d86-4ac0-9ee5-8ed852d9432a.jpg'
import admiImg11 from '../../assets/c860802c-8764-4d19-9819-7f2b2eb8c7ad.jpg'
// import admiImg7 from '../../assets/2328cc20-9d96-46b5-85ef-a3bc169358cc.jpeg'
// import admiImg8 from '../../assets/WhatsApp Image 2023-07-12 at 8.43.20 PM.jpg'
import admiImg9 from '../../assets/campus.jpeg'


const Campus = () => {
    return (
        <div className='administrative_block_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Hospital / <strong style={{ color: "blue", fontSize: "1.2vw" }}> Campus</strong></h3>

            </div>
            <div className="administrative_block_heading_div">
                <h3 className='administrative_block_heading' > Campus</h3>
            </div>
            <div className="administrative_block_body">
                <div className="administrative_block_text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos odit qui? Quidem ad, nobis, earum ea cum minus nemo ipsa, dolor praesentium sunt distinctio asperiores doloribus nesciunt corporis sint.
                        Possimus error esse officia dolor. Debitis veritatis reprehenderit praesentium adipisci, temporibus quas exercitationem expedita dolores velit, labore, sequi beatae aspernatur aliquam mollitia voluptas libero reiciendis id rem officia. <br /> <br /> <br /><br /> <br /> <br /> <br />  Neque, est.
                        Veritatis voluptatum voluptatem tenetur modi et rerum fuga accusamus, quibusdam quis quam inventore cum incidunt repellendus! Corporis, nesciunt maxime excepturi explicabo distinctio pariatur tempore at odit. Odio ducimus natus illum.
                        Molestias facilis, sapiente magnam id eligendi voluptatem cumque non fugiat fugit doloremque vero quo porro impedit illum expedita assumenda laboriosam numquam totam mollitia optio? Non nesciunt est vero exercitationem ratione.

                        Atque laborum maxime suscipit saepe <br /> <br /> <br /> <br /> <br /> explicabo corrupti vel non, rerum porro quisquam itaque, nostrum tempora quasi amet sunt harum animi laudantium modi, consequatur in aut. Sed aliquam vitae quae ipsum?
                        Alias impedit, nam est praesentium aut distinctio placeat officia quae ipsum adipisci vel soluta ea error repellendus aperiam dicta, tenetur provident cum corporis. Quaerat nemo quis earum, nesciunt molestias iste.
                        Laboriosam illum, nisi pariatur quod quisquam possimus et repellat dolores eum placeat quibusdam dignissimos sequi earum necessitatibus excepturi enim laborum odit beatae perspiciatis magni inventore consequuntur rerum! Voluptatem, adipisci consectetur.
                    </p>

                </div>
                <div className="administrative_block_img">
                    <img src={admiImg2} alt="admin_img1" className='admin_img' />
                    <img src={admiImg7} alt="admin_img1" className='admin_img' />
                    <img src={admiImg1} alt="admin_img1" className='admin_img' />
                    <img src={admiImg3} alt="admin_img1" className='admin_img' />

                </div>
            </div>
            <div className='campus_bottom_img_div_main' >
                {/* <img src={} alt="" /> */}
                <div className='campus_bottom_img_div'>
                    <img src={admiImg5} alt="admin_img1" className='campus_bottom_img' />
                    <p>Campus Layout</p>
                </div>
                <div className='campus_bottom_img_div'>

                    <img src={admiImg8} alt="admin_img1" className='campus_bottom_img' />
                    <p>Hospital Building-5</p>
                </div>
                <div className='campus_bottom_img_div'>

                    <img src={admiImg4} alt="admin_img1" className='campus_bottom_img' />
                    <p>Jivika-Helpline Center</p>
                </div>
                <div className='campus_bottom_img_div'>

                    <img src={admiImg6} alt="admin_img1" className='campus_bottom_img' />
                    <p>Hospital Building-3</p>
                </div>
                <div className='campus_bottom_img_div'>

                    <img src={admiImg10} alt="admin_img1" className='campus_bottom_img' />
                    <p>WTP Plant</p>
                </div>
                <div className='campus_bottom_img_div'>

                    <img src={admiImg11} alt="admin_img1" className='campus_bottom_img' />
                    <p>Oxygen Generation Plant</p>
                </div>

            </div>
        </div>
    )
}

export default Campus