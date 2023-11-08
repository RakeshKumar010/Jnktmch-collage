import { useState } from 'react'
import './stafflist.css'

const GradeList = () => {
    const [pageNumber, setPageNumber] = useState(0)

    return (
        <div className='stafflist_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Hospital /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Nurse List</strong></h3>
            </div>
            <div className="gradeList_main">
                <h4 className='staff_list_heading'>GRADE A NURSE LIST</h4>

                <table className='library_table_main gradeList_table_main'>
                    <thead>
                        <tr className='gradeList_table_header'>
                            <th>SL.</th>
                            <th>Name of Staff</th>
                            <th>Joining Date</th>
                            <th>Post Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Khushbu Kumari</td>
                            <td>17.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Puja Kumari</td>
                            <td>17.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Kumari Soni</td>
                            <td>17.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Nitu Kumari</td>
                            <td>17.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Sehjadi Kumari</td>
                            <td>17.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Renu Kumari</td>
                            <td>17.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Sarita Kumari</td>
                            <td>17.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Puja Kumari</td>
                            <td>18.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Kumari Madhusala</td>
                            <td>18.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Priyanka Priya</td>
                            <td>18.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Anuja Bharti</td>
                            <td>18.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Puja Kumari</td>
                            <td>18.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Sweety Kumari</td>
                            <td>18.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Sandhya Kumari</td>
                            <td>18.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Abhilasha Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Sanu Priya</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Komal Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Sapna Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>Abhilasha Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>Lusi Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>Kumari Manisha</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>Sneha Suman</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>Binita Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>Kumari Gudia</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>Bindu Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>Sawita Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>Renu Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>Rita Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>Kavita Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td>Kriti Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td>Priti Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td>Kumari Kiran</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td>Devanand Kumar</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>Khushbu Kumari</td>
                            <td>97.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>35</td>
                            <td>Nilu Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td>Sarita Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>37</td>
                            <td>Lovely Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>38</td>
                            <td>Richa Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>39</td>
                            <td>Kiran Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>40</td>
                            <td>Sonam Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>41</td>
                            <td>Madulata Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>42</td>
                            <td>Nisha Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>43</td>
                            <td>Khushbu kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>44</td>
                            <td>Vibha</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>45</td>
                            <td>Anushri</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>46</td>
                            <td>Monika Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>47</td>
                            <td>Abhilasha</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>48</td>
                            <td>Sweta Bharti</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>49</td>
                            <td>Soni Kumari</td>
                            <td>17.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>50</td>
                            <td>Sweety Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>51</td>
                            <td>Deepa Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>52</td>
                            <td>Kumari Ritu</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>53</td>
                            <td>Monika Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>54</td>
                            <td>Nitu Kumari</td>
                            <td>19.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>55</td>
                            <td>Janki Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>56</td>
                            <td>Nisha Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>57</td>
                            <td>Archana Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>58</td>
                            <td>Sangita Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>59</td>
                            <td>Priti Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>60</td>
                            <td>Lalita Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>61</td>
                            <td>Vandana Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>62</td>
                            <td>Shindhu Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>63</td>
                            <td>Archana Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>64</td>
                            <td>Mamta Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>65</td>
                            <td>Madhu Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>66</td>
                            <td>Sonam Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>67</td>
                            <td>Soni Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>68</td>
                            <td>Divya Francic</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>69</td>
                            <td>Vandana Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>70</td>
                            <td>Priya Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>71</td>
                            <td>Tara Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>72</td>
                            <td>Vandana Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>73</td>
                            <td>Ruby Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>74</td>
                            <td>Amrita Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>75</td>
                            <td>Minhaj Aalam</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>76</td>
                            <td>Moh. Safiullah Aalam</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>77</td>
                            <td>Anju Kusum</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>78</td>
                            <td>Ratanmala</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>79</td>
                            <td>Madhu Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>80</td>
                            <td>Monika Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>81</td>
                            <td>Prachi</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>82</td>
                            <td>Richa Bharti</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>83</td>
                            <td>Lakho kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>84</td>
                            <td>Moh.Muntshir Aalam</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>85</td>
                            <td>Devyani Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>86</td>
                            <td>Sapna Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>87</td>
                            <td>Rekha Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>88</td>
                            <td>Kanchan Raj</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>89</td>
                            <td>Ruby Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>90</td>
                            <td>Shivani Kumari</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>91</td>
                            <td>Arvind Kumar</td>
                            <td>20.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>92</td>
                            <td>Dazy Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>93</td>
                            <td>Kumari Priti Sharma</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>94</td>
                            <td>Vandana Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        {/* </tr> */}
                        <tr>
                            <td>95</td>
                            <td>Pushplata Sharma</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>96</td>
                            <td>Amrita Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>97</td>
                            <td>Alka Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>98</td>
                            <td>Baby Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>99</td>
                            <td>Piyush Anand</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>100</td>
                            <td>Kanchan Mala</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>101</td>
                            <td>Sushma Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>102</td>
                            <td>Anisha Rani</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>103</td>
                            <td>Sarita Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>104</td>
                            <td>Kumari Shobha Paswan</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>105</td>
                            <td>Pumpi Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>106</td>
                            <td>Rajli Devi</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>107</td>
                            <td>Supriya Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <td>108</td>
                        <td>Partima Kumari</td>
                        <td>21.08.2020</td>
                        <td>Grade A Nurse</td>
                        {/* </tr> */}
                        <tr>
                            <td>109</td>
                            <td>Sonia Rani</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>110</td>
                            <td>Sunidhi Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>111</td>
                            <td>Sonali Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>112</td>
                            <td>Ruhi Parween</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>113</td>
                            <td>Jainab Tarranum</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>114</td>
                            <td>Ruby Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>115</td>
                            <td>Puja Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>116</td>
                            <td>Simpi Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>117</td>
                            <td>Puja Bharti</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>118</td>
                            <td>Babli Kumari</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>119</td>
                            <td>Rani Naj</td>
                            <td>21.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>120</td>
                            <td>Sehnaj Begam</td>
                            <td>22.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>121</td>
                            <td>Tanuja Bharti</td>
                            <td>22.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>122</td>
                            <td>Vidya Bharti</td>
                            <td>22.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>123</td>
                            <td>Nutan Kumari</td>
                            <td>22.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td>Sulochana Kumari</td>
                            <td>22.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>125</td>
                            <td>Nisha Rani</td>
                            <td>22.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>126</td>
                            <td>Parbhat Kumar</td>
                            <td>22.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>127</td>
                            <td>Lali Lucky</td>
                            <td>22.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>128</td>
                            <td>Babli Victor</td>
                            <td>22.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>129</td>
                            <td>Juli Kumari</td>
                            <td>22.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>130</td>
                            <td>Neha Ranjan</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>131</td>
                            <td>Rita Kumari</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>132</td>
                            <td>Dimpal Kumari</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>133</td>
                            <td>Madhu Kumari</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>134</td>
                            <td>Priti Rani</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>135</td>
                            <td>Nutan Kumari</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>136</td>
                            <td>Dippa Kumari</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>137</td>
                            <td>Anuradha Kumari</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>138</td>
                            <td>Kumari Sweta Kumari</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>139</td>
                            <td>Prerna Bharti</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>140</td>
                            <td>Dolly Kumari</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>141</td>
                            <td>Anuma Kumari</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>142</td>
                            <td>Swet Kumari</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>143</td>
                            <td>Dazy Kumari Masiha</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>144</td>
                            <td>Shruti Soren</td>
                            <td>24.08.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>145</td>
                            <td>Sima Yadav</td>
                            <td>04.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>146</td>
                            <td>Suman Kumari</td>
                            <td>04.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>147</td>
                            <td>Amrata Kumari</td>
                            <td>04.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>148</td>
                            <td>Amrita Kumari</td>
                            <td>04.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>149</td>
                            <td>Ankita Ambasta</td>
                            <td>05.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>150</td>
                            <td>Mina Marandi</td>
                            <td>05.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>151</td>
                            <td>Shiv Kumar</td>
                            <td>05.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>152</td>
                            <td>Kavita Kumari</td>
                            <td>05.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>153</td>
                            <td>Soni Kumari</td>
                            <td>05.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>154</td>
                            <td>Rani Kumari</td>
                            <td>05.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>155</td>
                            <td>Bhart Singh</td>
                            <td>07.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>156</td>
                            <td>Dipti Isha Shamd</td>
                            <td>07.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>157</td>
                            <td>Puja Kumari</td>
                            <td>07.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>158</td>
                            <td>Manisha Kumari</td>
                            <td>04.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>159</td>
                            <td>Shadhana Kumari</td>
                            <td>07.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>160</td>
                            <td>Anuj Kumar</td>
                            <td>07.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>161</td>
                            <td>Nisha Kumari</td>
                            <td>07.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>

                        <tr>
                            <td>162</td>
                            <td>Nishu Kumari</td>
                            <td>04.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>163</td>
                            <td>Anupam Kumari</td>
                            <td>07.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>164</td>
                            <td>Manak Ram</td>
                            <td>07.09.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>165</td>
                            <td>Urmila Masih</td>
                            <td>30.07.2020</td>
                            <td>Upper Matron</td>
                        </tr>
                        <tr>
                            <td>166</td>
                            <td>Khushbu Kumari</td>
                            <td>08.07.2020</td>
                            <td>Upper Matron</td>
                        </tr>
                        <tr>
                            <td>167</td>
                            <td>Nirmala Kumari</td>
                            <td>06.07.2020</td>
                            <td>Upper Matron</td>
                        </tr>
                        <tr>
                            <td>168</td>
                            <td>Manju Kumari</td>
                            <td>08.07.2020</td>
                            <td>Upper Matron</td>
                        </tr>
                        <tr>
                            <td>169</td>
                            <td>Ranjana Sinha</td>
                            <td></td>
                            <td>Upper Matron</td>
                        </tr>
                        <tr>
                            <td>170</td>
                            <td>Sachin Kumar</td>
                            <td>06.03.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>171</td>
                            <td>Sunil Kumar Saah</td>
                            <td>06.03.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>172</td>
                            <td>Vinita Kumari</td>
                            <td>06.03.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>173</td>
                            <td>Ritika</td>
                            <td>06.03.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>174</td>
                            <td>Jyoti Kumari</td>
                            <td>05.03.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>175</td>
                            <td>Ritu Kumari</td>
                            <td>06.03.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                        <tr>
                            <td>176</td>
                            <td>Kumari Harshita</td>
                            <td>06.03.2020</td>
                            <td>Grade A Nurse</td>
                        </tr>
                    </tbody>
                </table>
                <div className="pagination">
                    <h1>{`<`}</h1>
                    <h1>{pageNumber}</h1>
                    <h1>{`>`}</h1>
                </div>
            </div >
        </div>
    )
}

export default GradeList