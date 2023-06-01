import Cookies, { CookieAttributes } from 'js-cookie';

class AuthStorage {
    private tokenName: string = '_auth';
    private refreshTokenName: string = '_auth_refresh';
    private tokenTypeName: string = '_auth_type';

    public clear(): void {
        this.removeToken();
        this.removeRefreshToken();
    }


    // Token
    public hasToken(): boolean {
        return this.has(this.tokenName);
    }

    public getToken(): string {
        return this.get(this.tokenName)!;
    }

    public setToken(value: string, options: CookieAttributes): string|undefined {
        return this.set(this.tokenName, value, options);
    }

    public removeToken(): void {
        return this.remove(this.tokenName);
    }


    // Refresh token
    public hasRefreshToken(): boolean {
        return this.has(this.refreshTokenName);
    }

    public getRefreshToken(): string {
        return this.get(this.refreshTokenName)!;
    }

    public setRefreshToken(value: string, options: CookieAttributes): string|undefined {
        return this.set(this.refreshTokenName, value, options);
    }

    public removeRefreshToken(): void {
        return this.remove(this.refreshTokenName);
    }


    // Auth header
    public hasAuthHeader(): boolean {
        return this.hasTokenType() && this.hasToken();
    }

    public getAuthHeader(): string {
        return `${this.getTokenType()} ${this.getToken()}`;
    }

    public getAuthHeaderOrNull(): string|null {
        if (!this.hasAuthHeader()) {
            return null;
        }

        return this.getAuthHeader();
    }


    // Private
    private hasTokenType(): boolean {
        return Cookies.get(this.tokenTypeName) !== undefined;
    }

    private getTokenType(): string {
        return Cookies.get(this.tokenTypeName)!;
    }


    public has(name: string): boolean {
        return Cookies.get(name) !== undefined;
    }

    public get(name: string): string {
        return Cookies.get(name)!;
    }

    public set(name: string, value: string, options: CookieAttributes): string|undefined {
        // todo: remove dot from AuthProvider coponent.
        options.domain = `.${window.location.hostname}`;

        return Cookies.set(name, value, options);
    }

    public remove(name: string): void {
        return Cookies.remove(name);
    }
}

export const authStorage = new AuthStorage();
