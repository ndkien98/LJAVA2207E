package com.t3h;

public class Address {
    private String addr1;
    private String addr2;
    private String addr3;
    private String addr4;
    private String addr5;

    @Override
    public String toString() {
        return "Address{" +
                "addr1='" + addr1 + '\'' +
                ", addr2='" + addr2 + '\'' +
                ", addr3='" + addr3 + '\'' +
                ", addr4='" + addr4 + '\'' +
                ", addr5='" + addr5 + '\'' +
                '}';
    }

    public String getAddr1() {
        return addr1;
    }

    public void setAddr1(String addr1) {
        this.addr1 = addr1;
    }

    public String getAddr2() {
        return addr2;
    }

    public void setAddr2(String addr2) {
        this.addr2 = addr2;
    }

    public String getAddr3() {
        return addr3;
    }

    public void setAddr3(String addr3) {
        this.addr3 = addr3;
    }

    public String getAddr4() {
        return addr4;
    }

    public void setAddr4(String addr4) {
        this.addr4 = addr4;
    }

    public String getAddr5() {
        return addr5;
    }

    public void setAddr5(String addr5) {
        this.addr5 = addr5;
    }
}
