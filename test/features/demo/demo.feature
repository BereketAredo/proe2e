Feature: Demo feature

    @demo
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <searchItem>
        Then Click on the second Search result
        Then URL should match <ExpectedURL>

        Examples:
            | TestIDr 1  | searchItem | ExpectedURL           |
            | Demo_TC001 | WDIO       | https://webdriverio.io" |