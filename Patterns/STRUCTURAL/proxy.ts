
interface Internet {
    connectToHost(url: string): void;
}


class ProxyInternet implements Internet {

    private Internet: Internet = new DefaultInternet();
    private static protectedSites: string[] = ["facebook.com", "instagram.com", "tiktok.com"];

    connectToHost(url: string): void {
        let isBanned = ProxyInternet.protectedSites.includes(url);
        if(isBanned) {
            throw("You cant acces banned site");
        }
        this.Internet.connectToHost(url);
    }
}


class DefaultInternet implements Internet {
    connectToHost(url: string): void {
        console.log(`Connecting to ${url}`);
    }
}


(function main() {

    let internt: Internet = new ProxyInternet();

    internt.connectToHost("facebook.com");
    internt.connectToHost("google.com");

})()